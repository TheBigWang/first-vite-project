
import { FC } from "react";
import Header from "./Header";
import Image from "./Image";
import Text from "./Text";
import Title from "./Title";

interface IPage {
  title: string;
  header: string;
  text: string;
  img: string;
}

const Page: FC<IPage> = ({ title, header, text, img }) => {
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
        <Image image={img} />
      </div>
    </div>
  )
}






export default Page


