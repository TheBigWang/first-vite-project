
import { FC } from "react";
import Header from "./Header";

import Display from "./image-links/ImageLinks";
import Text from "./Text";
import Title from "./Title";

interface IPage {
  title: string;
  header: string;
  text: string;
  img: string;
  link: string;
  link2: string;
  
}

const Page: FC<IPage> = ({ title, header, text, img, link,link2}) => {
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
        <Display img={img} link={link} link2={link2} />
      </div>
    </div>
  )
}






export default Page


