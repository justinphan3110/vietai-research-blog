import { Link } from 'gatsby';
import React from 'react';
import { Accent, ButtonType } from '../../../../globals';
import Button from '../../Button/Button';
import HorizontalCarousel from '../../Carousel/HorizontalCarousel';
import './HomeBanner.scss';
// import './HFTask.scss'
interface HomeBannerProps {
    // carouselPosts: Record<string, Frontmatter>;
    horizontalCarouselTopics: TopicDetails[];
}

const HomeBanner: React.FC<HomeBannerProps> = (props: HomeBannerProps) => {

    React.useEffect(() => {
        console.log(props.horizontalCarouselTopics)
    }, [props])

    return (
        <div className="home-banner">
            <div className="home-banner__content">
                <div className="home-banner__content__details">
                    <h1>VietAI Research</h1>

                    <p>
                        We connect students and members of VietAI with our mentors, which are world-class experts in AI, to do cutting-edge research.
                    </p>
                </div>
                <div className="home-banner__content__image">
                    <HorizontalCarousel
                        slidesNum={props.horizontalCarouselTopics.length + 1}
                    >
                        {[...props.horizontalCarouselTopics]
                            .sort()
                            // .sort(() => Math.random() - 0.5)
                            .map((topic, i) => (
                                <Link
                                    key={topic.title}
                                    className="carousel-topic"
                                    // to={`/topics/${topic.url}`}
                                >
                                    <div className="carousel-topic__logo-wrapper">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: topic.logo || ''
                                            }}
                                        ></span>
                                    </div>
                                    <div className="carousel-topic__title">
                                        <h4>{topic.title}</h4>
                                    </div>
                                </Link>
                            ))}
                    </HorizontalCarousel>
                </div>
            </div>
            <div className="home-banner__background-wave"></div>
        </div>
    );
};

export default HomeBanner;
