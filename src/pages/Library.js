import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Library.css";
import data from "../data/libraryData";

/** Project Library with three views: 'all' | 'category' | 'project'. */
export default function Library() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        document.title = "Projects • ML/DS Portfolio Website";
    }, []);

    /** Static sections */
    const sections = useMemo(
        () => [
            { key: "analysis", title: "Data Analysis", items: data.analysis },
            { key: "visualization", title: "Data visualization", items: data.visualization },
            { key: "mining", title: "Data Mining", items: data.mining },
            { key: "ml", title: "Basic Machine Learning Models", items: data.ml },
            { key: "nn", title: "Neural Network Models", items: data.nn },
            { key: "rl", title: "Reinforcement Learning Models", items: data.rl },
        ],
        []
    );

    /** Locate a project across sections */
    const findById = useCallback(
        (id) => {
            for (const sec of sections) {
                const item = sec.items.find((i) => i.id === id);
                if (item) return { sectionKey: sec.key, sectionTitle: sec.title, item };
            }
            return null;
        },
        [sections]
    );

    // View state
    const [view, setView] = useState("all"); // 'all' | 'category' | 'project'
    const [openKeys, setOpenKeys] = useState(new Set(["analysis"]));
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selected, setSelected] = useState(null);

    // Slider state (reset on project change)
    const [galleryIndex, setGalleryIndex] = useState(0);

    /** Deep-link: /library?project=<id> OR /library?category=<key> */
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pid = params.get("project");
        const cat = params.get("category");

        if (pid) {
            const found = findById(pid);
            if (found) {
                setSelected(found.item);
                setSelectedCategory({ key: found.sectionKey, title: found.sectionTitle });
                setOpenKeys((prev) => new Set(prev).add(found.sectionKey));
                setView("project");
                setGalleryIndex(0);
                return;
            }
        }
        if (cat) {
            const sec = sections.find((s) => s.key === cat);
            if (sec) {
                setSelected(null);
                setSelectedCategory({ key: sec.key, title: sec.title });
                setOpenKeys((prev) => new Set(prev).add(sec.key));
                setView("category");
                setGalleryIndex(0);
                return;
            }
        }
        // default
        setView("all");
        setSelected(null);
        setSelectedCategory(null);
        setGalleryIndex(0);
    }, [location.search, findById, sections]);

    /* ---------- interactions ---------- */

    const onHeadingClick = (sec) => {
        const next = new Set(openKeys);
        next.has(sec.key) ? next.delete(sec.key) : next.add(sec.key);
        setOpenKeys(next);
        setSelected(null);
        setSelectedCategory({ key: sec.key, title: sec.title });
        setView("category");
        navigate(`/library?category=${sec.key}`, { replace: false });
    };

    const onProjectClick = (item, sec) => {
        setSelected(item);
        setSelectedCategory({ key: sec.key, title: sec.title });
        setOpenKeys((prev) => new Set(prev).add(sec.key));
        setView("project");
        setGalleryIndex(0);
        navigate(`/library?project=${encodeURIComponent(item.id)}`, { replace: false });
    };

    const onTitleClick = () => {
        setView("all");
        setSelected(null);
        setSelectedCategory(null);
        setGalleryIndex(0);
        if (location.search) navigate("/library", { replace: false });
    };

    // Fallback gallery images if a project doesn't define its own `images`
    const getFallbackImages = () => [
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=60",
    ];

    /* ---------- render helpers ---------- */

    /** Default “All” view: one card per category (only titles inside). */
    const CategoryCard = ({ section }) => {
        const goCategory = () => {
            setSelected(null);
            setSelectedCategory({ key: section.key, title: section.title });
            setView("category");
            navigate(`/library?category=${section.key}`, { replace: false });
        };
        return (
            <article
                className="detail-card clickable-card"
                role="button"
                tabIndex={0}
                onClick={goCategory}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goCategory()}
            >
                <h2 className="cat-title">{section.title}</h2>
                <ul className="title-list">
                    {section.items.map((it) => (
                        <li key={it.id}>
                            <article
                                className="grid-card clickable-card"
                                role="button"
                                tabIndex={0}
                                title="Open project"
                                onClick={(e) => { e.stopPropagation(); onProjectClick(it, section); }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.stopPropagation();
                                        onProjectClick(it, section);
                                    }
                                }}
                            >
                                <h3 className="grid-title">{it.title}</h3>
                                {it.tech?.length > 0 && (
                                    <p className="grid-tech tech-stack">{it.tech.join(" • ")}</p>
                                )}
                            </article>
                        </li>
                    ))}
                </ul>
            </article>
        );
    };

    /** Category view: semi-detailed cards; whole card opens the project. */
    const ProjectCardSemi = ({ item, section }) => {
        const openProject = () => onProjectClick(item, section);
        return (
            <article
                className="grid-card clickable-card"
                role="button"
                tabIndex={0}
                onClick={openProject}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openProject()}
            >
                <h3 className="grid-title">{item.title}</h3>
                {item.subtitle && <p className="muted">{item.subtitle}</p>}
                {item.tech?.length > 0 && (
                    <p className="grid-tech tech-stack">{item.tech.join(" • ")}</p>
                )}
            </article>
        );
    };

    const AllGrid = () => (
        <div className="stack">
            {sections.map((sec) => (
                <CategoryCard key={sec.key} section={sec} />
            ))}
        </div>
    );

    const CategoryGrid = ({ section }) => (
        <div className="detail-card">
            <h2>{section.title}</h2>
            <div className="grid-wrap">
                {section.items.map((it) => (
                    <ProjectCardSemi key={it.id} item={it} section={section} />
                ))}
            </div>
        </div>
    );

    // Open image in modal
    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsImageOpen(true); // Show the modal and enlarge image
    };

    // Close modal and reset image
    const handleCloseModal = () => {
        setIsImageOpen(false);
        setSelectedImage(null); // Close modal and reset the image state
    };

    /* ---------- derived values ---------- */

    const currentSection =
        selectedCategory && sections.find((s) => s.key === selectedCategory.key);

    const images =
        selected?.images?.length ? selected.images : getFallbackImages();

    const goPrev = () =>
        setGalleryIndex((i) => (i - 1 + images.length) % images.length);
    const goNext = () =>
        setGalleryIndex((i) => (i + 1) % images.length);

    const onGoBack = () => {
        if (selectedCategory) {
            setSelected(null);
            setView("category");
            navigate(`/library?category=${selectedCategory.key}`, { replace: false });
        } else {
            onTitleClick();
        }
    };

    /* ---------- page ---------- */

    return (
        <div className="library-viewport">
            <header className="library-header">
                <h1 className="library-title clickable" onClick={onTitleClick} title="Go to default view">
                    Project Library
                </h1>
                <div style={{ display: "flex", gap: 10 }}>
                    <Link className="btn" to="/">Home</Link>
                    <Link className="btn" to="/contact">Contact</Link>
                </div>
            </header>

            <div className="library-gradient" />

            <div className="library-split">
                {/* Sidebar (hidden below 900px via CSS) */}
                <aside className="library-left">
                    {sections.map((sec) => (
                        <div className="acc" key={sec.key}>
                            <button
                                className="acc-head"
                                onClick={() => onHeadingClick(sec)}
                                aria-expanded={openKeys.has(sec.key)}
                            >
                                <span>{sec.title}</span>
                                <span className={`chev ${openKeys.has(sec.key) ? "open" : ""}`}>▾</span>
                            </button>

                            {openKeys.has(sec.key) && (
                                <ul className="acc-list">
                                    {sec.items.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                className={`acc-item ${selected?.id === item.id ? "active" : ""}`}
                                                onClick={() => onProjectClick(item, sec)}
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </aside>

                {/* Right pane */}
                <main className="library-right">
                    {/* <900px: show CATEGORY dropdown on All/Category views */}
                    {(view === "all" || view === "category") && (
                        <div className="mobile-catbar" aria-hidden={false}>
                            <label htmlFor="cat-dd">Browse category</label>
                            <div className="toolbar-row">
                                <select
                                    id="cat-dd"
                                    className="toolbar-select"
                                    value={selectedCategory?.key || ""}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (!val) {
                                            onTitleClick();
                                            return;
                                        }
                                        const sec = sections.find((s) => s.key === val);
                                        if (sec) {
                                            setSelected(null);
                                            setSelectedCategory({ key: sec.key, title: sec.title });
                                            setOpenKeys((prev) => new Set(prev).add(sec.key));
                                            setView("category");
                                            navigate(`/library?category=${sec.key}`, { replace: false });
                                        }
                                    }}
                                >
                                    <option value="">All</option>
                                    {sections.map((s) => (
                                        <option key={s.key} value={s.key}>
                                            {s.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    {/* <900px: show PROJECT dropdown + Go back on Project view */}
                    {view === "project" && selectedCategory && (
                        <div className="mobile-projbar" aria-hidden={false}>
                            <label htmlFor="proj-dd">Browse project</label>
                            <div className="toolbar-row">
                                <select
                                    id="proj-dd"
                                    className="toolbar-select"
                                    value={selected?.id || ""}
                                    onChange={(e) => {
                                        const id = e.target.value;
                                        const item = currentSection?.items.find((it) => it.id === id);
                                        if (item && currentSection) onProjectClick(item, currentSection);
                                    }}
                                >
                                    {currentSection?.items.map((it) => (
                                        <option key={it.id} value={it.id}>
                                            {it.title}
                                        </option>
                                    ))}
                                </select>

                                <button className="btn" type="button" onClick={onGoBack}>
                                    Go back
                                </button>
                            </div>
                        </div>
                    )}

                    {view === "project" && selected && (
                        <article className="detail-card project-detail" id="detail-card-display">
                            <div id="detail-infom">
                                <h2>{selected.title}</h2>
                                <p className="muted">{selected.subtitle}</p>

                                <div className="detail-meta">
                                    <div>
                                        <strong>Tech:</strong>{" "}
                                        <span className="tech-stack">{selected.tech.join(" • ")}</span>
                                    </div>
                                    {selected.metrics && <div className="muted">{selected.metrics}</div>}
                                </div>

                                <p className="detail-body">{selected.description}</p>

                                {selected.highlights?.length > 0 && (
                                    <ul className="detail-list">
                                        {selected.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>
                                )}
                                {/* --- GitHub Button --- */}
                                <div className="detail-actions" style={{ marginTop: 14 }}>
                                    {selected.github && (
                                        <a className="btn" href={selected.github} target="_blank" rel="noopener noreferrer">
                                            View in GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                            {/* --- Simple Image Gallery --- */}
                            {/* Gallery section */}
                            <section className="gallery" aria-label="Project screenshots">
                                {images.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Project screenshot ${index + 1}`}
                                        loading="lazy"
                                        onClick={() => handleImageClick(src)} // Trigger image click event
                                    />
                                ))}
                            </section>

                            {/* Modal for enlarged image */}
                            {isImageOpen && (
                                <div className="image-modal" onClick={handleCloseModal}>
                                    <img src={selectedImage} alt="Enlarged View" className="enlarged-image" />
                                </div>
                            )}
                        </article>
                    )}

                    {view === "category" && selectedCategory && (
                        <CategoryGrid
                            section={{
                                key: selectedCategory.key,
                                title: selectedCategory.title,
                                items: sections.find((s) => s.key === selectedCategory.key)?.items ?? [],
                            }}
                        />
                    )}

                    {view === "all" && <AllGrid />}
                </main>
            </div>
        </div>
    );
}
