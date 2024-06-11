
import { FC } from "react";
import Header from "./Header";

import ImageLinks from "./image-links/ImageLinks";
import Text from "./Text";
import Title from "./Title";
import { ILinkItem } from "../../server";

interface IPage {
  title: string;
  header: string;
  text: string;
  img: string;
  links: ILinkItem[];
  
  
}

const Page: FC<IPage> = ({ title, header, text, img, links}) => {
  return (
    <div style={{
      textAlign: 'left',
      display: 'flex',
    }}>
      <div style={{ flex: '2' }}>
        <Title title={title} />
        <Header header={header} />
        <Text text={text} />
      </div>
      <div style={{ flex: '1' }}>
        <ImageLinks img={img} links={links} />
      </div>
    </div>
  )
}

export default Page


