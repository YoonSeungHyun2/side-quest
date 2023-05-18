import { GrView } from 'react-icons/gr';
import Card from '../Card';
import { AiFillHeart } from 'react-icons/ai';
import Stack from '../stack/Stack';
import Tag from '../Tag';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Project } from '@/types/project';
import { useState } from 'react';
type Props = {
  size: string;
  data: Project;
};

const ProjectCard = ({ data, size }: Props) => {
  const router = useRouter();
  const [heartState, setHeartState] = useState<boolean>(false);

  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const srcSvg = `/images/thum (${randomNumber}).svg`;
  //프로젝트 글 조회
  const viewProject = (id: number) => {
    router.push(`projects/${id}`);
  };
  return (
    <Box>
      <Card
        onClick={() => viewProject(data.projectId)}
        width={size === 'lg' ? '416px' : '298px'}
      >
        {router.pathname === '/' && (
          <div className="info-heart">
            <span>
              <AiFillHeart
                size={30}
                fill={!heartState ? 'rgba(106, 106, 106, 0.5)' : 'red'}
                onClick={(e) => {
                  e.stopPropagation();
                  setHeartState(!heartState);
                }}
              />
            </span>
          </div>
        )}
        <div className="img-box">
          <div>
            <img src={srcSvg} alt="thumbnail" className="thumbnail-image" />
          </div>
        </div>
        <strong className="nanum-bold title-box">{data.title}</strong>
        <div className="tag-box">
          <ul>
            {data.fieldList.map((tag, i) => (
              <li key={`${tag.field}+${i}`}>
                <Tag>
                  <div>{tag.field}</div>
                </Tag>
              </li>
            ))}
          </ul>
        </div>
        <div className="select-box">
          <ul>
            {data.techStackList.map((tech) => (
              <Stack key={tech.tech} tech={tech.tech} />
            ))}
          </ul>
        </div>
        <div className="detail-box">
          <div>
            <div className="infor-box">
              <span>
                <AiFillHeart fill="red" />
              </span>
              <span>{data.totalLikes}</span>
            </div>
            <div className="infor-box">
              <span>
                <GrView />
              </span>
              <span>{data.views}</span>
            </div>
            <div className="infor-box">
              <span>
                <AiFillHeart />
              </span>
              <span>{data.totalLikes}</span>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default ProjectCard;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0px;
  transition: transform 0.2s ease-in-out, background 1s ease-in-out;

  &:hover {
    transform: translateY(-20px);
    background-color: white;
  }

  @media (max-width: 960px) {
    margin: 2px 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .img-box {
    padding: 5px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 960px) {
      display: none;
    }
    > div {
      border: solid 2px #f6f6f6;
      border-radius: 15px 15px 0px 0px;
      overflow: hidden;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }

  .info-heart {
    position: absolute;
    top: 130px;
    right: 15px;
    cursor: pointer;
    @media (max-width: 960px) {
      top: 112px;
    }
  }

  .title-box {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 13px 5px;
    font-size: 16px;
    color: #3c3c3c;
    font-weight: 400;
  }

  .tag-box {
    padding: 5px 13px;
    ul {
      width: 296px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .select-box {
    position: relative;
    padding: 5px 13px 10px;
    margin-bottom: 8px;
    ul {
      width: 296px;
      white-space: nowrap;
      overflow: hidden;
      li {
        box-shadow: var(--box-shadow);
      }
    }
  }

  .detail-box {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    padding: 7px 13px;
    border-top: solid 1px #ebebeb;

    > div {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    img {
      width: 24px;
      height: 24px;
    }

    .infor-box {
      display: flex;
      gap: 4px;
      > span {
        font-size: 12px;
      }
    }
  }

  .author {
    border-radius: 50%;
  }
`;
