import { graphql } from 'gatsby';
import React, {useEffect} from 'react';
import Container from '../components/layout/Container/Container';
import Group from '../components/layout/Group/Group';
import PageLayout from '../components/layout/PageLayout/PageLayout';
import PageSection from '../components/layout/PageSection/PageSection';
import AnnouncementHeader from '../components/ui/AnnouncementHeader/AnnouncementHeader';
import Block from '../components/ui/Cards/Block';
import Divider from '../components/ui/Divider/Divider';
import HomeBanner from '../components/ui/Home/HomeBanner/HomeBanner';
import MoreArticles from '../components/ui/Home/MoreArticles/MoreArticles';
import PostsPerTopic from '../components/ui/Home/PostsPerTopic/PostsPerTopic';
import Topics from '../components/ui/Home/Topics/Topics';
import { PostsSelector } from '../components/utils/PostsSelector';
import Seo from '../components/utils/Seo';
import { useAnimationOnScroll } from '../components/utils/useAnimateOnScroll';
import { Direction } from '../globals';
import './index.scss';

interface HomeProps {
    data: {
        homeYaml: {
            about_section: AboutSectionBlock[];
            tabs_posts: PostsPerTopicBlock[];
        };
        allMdx: {
            nodes: PostDetails[];
        };
        topicsYaml: {
            topics: TopicDetails[];
        };
    };
}

const Home: React.FC<HomeProps> = ({ data }: HomeProps) => {
    const postsSelector = new PostsSelector(data.allMdx.nodes);
    useAnimationOnScroll();
    useEffect(() => {
        console.log(data.homeYaml.tabs_posts)
    }, [])
    return (
        <PageLayout>
            <Seo isPost={false} />
            <AnnouncementHeader />
            <HomeBanner horizontalCarouselTopics={data.topicsYaml.topics} />
            <PageSection className="posts-per-topic-section">
                <Container>
                    <div className="section-text">
                        <h2>Explore VietAI Research Works</h2>
                        <p>
                            An Artificial Intelligence where you can read about our new state-of-the-art Deep Learning works.
                        </p>
                    </div>

                    <PostsPerTopic
                        {...postsSelector.getByTopic(data.homeYaml.tabs_posts)}
                    />
                    {true || console.log(data.homeYaml.tabs_posts)}
                </Container>
            </PageSection>
            <PageSection className="topics-section">
                <Container>
                    <div className="section-text">
                        <h2>Topics</h2>
                        <p>
                            Our Researchers and Students are working on a wide-range of topics in AI
                        </p>
                    </div>
                    <Topics topics={data.topicsYaml.topics} />
                </Container>
            </PageSection>
            <Divider direction={Direction.horizontal} />
            <PageSection className="more-articles-section">
                <Container>
                    <div className="section-text">
                        <h2>More articles</h2>
                    </div>
                    <MoreArticles
                        posts={data.allMdx.nodes.map(
                            (node) => node.frontmatter
                        )}
                    />
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export const homeQuery = graphql`
    {
        homeYaml {
            tabs_posts {
                posts
                topic
            }
            about_section {
                desc
                icon
                title
            }
        }
        allMdx(
            filter: { frontmatter: { layout: { eq: "BlogPage" } } }
            sort: { fields: frontmatter___publishedAt, order: DESC }
        ) {
            nodes {
                frontmatter {
                    author
                    description
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    layout
                    suburl
                    tags
                    title
                }
            }
        }
        topicsYaml {
            topics {
                desc
                title
                url
                logo
            }
        }
    }
`;

export default Home;
