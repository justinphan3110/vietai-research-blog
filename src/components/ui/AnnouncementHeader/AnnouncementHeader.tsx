import React from 'react';
import { Accent, ButtonType } from '../../../globals';
import Button from '../Button/Button';
import './AnnouncementHeader.scss';

interface AnnouncementHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

//hardcoded it to avoid copy pasting everywhere
const AnnouncementHeader: React.FC<AnnouncementHeaderProps> = (
    props: AnnouncementHeaderProps
) => {
    return (
        <div className={props.className || 'announcement-header'}>
            {/* <a href="/spaces/dalle-mini/dalle-mini" className="flex bg-[#F6FFE2] hover:bg-[#EFFBD5] items-center justify-center py-2 text-smd text-center border-[#E9FDBF] text-[#0D3411] border-b"><div className="uppercase text-xs bg-[#E2F5B8] text-[#424039] px-1 mr-2">new
                </div>
                Play with 🥑 DALL·E mini on the Hub →
            </a> */}
            <div className="announcement-header__content">
            
                <p>📰 Check out our newest ViT5 Summarization Works</p>
                <Button
                    accent={Accent.primary}
                    type={ButtonType.linkExternal}
                    onClickLink="/vit5"
                    className="announcement-header__content__button"
                >
                    Read more
                </Button>
            </div>
        </div>
    );
};

export default AnnouncementHeader;
