import React from 'react';
import { Link } from 'react-router-dom';

const Causes = () => {
    return (
        <section id='causes' className="causes-area causes-area2 py-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hope-dark">Our Causes</h2>
                <p className="text-lg text-hope-dark/80 max-w-3xl mx-auto">
                    Through the dedication of our volunteers and the generosity of our donors,
                    we've been able to make a meaningful difference in thousands of lives.
                </p>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img
                                        src="/images/ration_kit.jpeg"
                                        alt="Ration-kit Distribution"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Ration-kit Distribution</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img
                                        src="/images/rationKit7.jpeg"
                                        alt="Pension for Single Mothers"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Pension for Single Mothers</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img
                                        src="/images/mardasa2.jpg"
                                        alt="Al-Noora Quran Academy"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Al-Noora Quran Academy</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img
                                        src="/images/skill_dev.jpeg"
                                        alt="Skill Development Classes"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Skill Development Classes</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img
                                        src="/images/snacks.jpeg"
                                        alt="Snacks Distribution"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Snacks Distribution</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img
                                        src="/images/marriage.jpg"
                                        alt="Marriage Assistance"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Marriage Assistance</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Causes;
