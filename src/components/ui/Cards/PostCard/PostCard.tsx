import cn from 'classnames';
import Img from 'gatsby-image';
import React, { useEffect } from 'react';
import { Direction } from '../../../../globals';
import Card from '../Card';
import './PostCard.scss';
import Group from '../../../layout/Group/Group';
import Block from '../Block';
import HFLogo from '-!svg-react-loader!./huggingface_logo.svg'
import { Link } from 'gatsby';

interface PostCardProps {
    post: Frontmatter;
    className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
    post,
    className
}: PostCardProps) => {
    useEffect(() => {
        console.log(post)
    }, [])

    const openBlogPage = (suburl: string) => {
        console.log(suburl)
        window.open(suburl, '_blank')
    }
    return (
        <Card
            direction={Direction.vertical}
            // onClickLink={post.suburl}
            className={cn(className, 'post-card')} //to pass group className and apply group scss
            aos="fade-up"
        >
            {post.image.childImageSharp && <Img

                fluid={post.image.childImageSharp.fluid}
                alt={post.title}
                className="post-card__image"

            ></Img>}
            <div className="post-card__tags">
                <span className="post-card__tags__item">
                    {post.tags.join(' · ')}
                </span>
            </div>
            <h3 className="post-card__title" onClick={() => openBlogPage(post.suburl)}>{post.title}</h3>
            <p className="post-card__description" onClick={() => openBlogPage(post.suburl)}>{post.description}</p>
            <footer className="post-card-footer">
                <Group size={2}>
                    <Block
                        direction={Direction.horizontal}
                        className="post-card-footer__block"
                    >
                        <div className="post-card-footer__block__item">
                            <a href='' target={'_blank'}> {post.venue} </a>
                        </div>
                    </Block>
                    <Block
                        direction={Direction.horizontal}
                        className="post-card-footer__block"
                    >

                        {post.github && <a
                            href={post.github} target={'_blank'}
                            className="footer__block__item__social"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#ffffff"
                                viewBox="0 0 24 24"
                            >
                                {/* eslint-disable-next-line max-len */}
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        }
                        {post.huggingface && <a className="footer__block__item__social" href={post.huggingface} target={'_blank'}>
                            <HFLogo />
                        </a>}
                    </Block>
                </Group>
            </footer>
        </Card>
    );
};

export default PostCard;
