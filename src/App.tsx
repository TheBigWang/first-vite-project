import { useMemo, useState } from 'react';
import './App.css';
import Page from './components/page/Page.tsx';
import { IButton } from './components/page/nav/Button.tsx';
import Nav from './components/page/nav/Nav.tsx';
import Data from './data/data.json';


const App = () => {
  const [page, setPage] = useState('capybara')

  const onHandleClick = (id: string) => {
    setPage(id)
  }

  const navData = useMemo(() => {
    const data: Omit<IButton, 'onSelect'>[] = Data.map((item) => {
      return {
        id: item.id,
        label: item.label
      }
    })

    return data;
  }, [])

  const pageDisplay = useMemo(() => {
    const pageData = Data.find((item) => {
      return page === item.id;
    })
    if (pageData) {
      return (
        <div>
          <Page
            title={pageData.title}
            header={pageData.header}
            text={pageData.text}
            img={pageData.img}
          ></Page>
        </div>
      )
    } else {
      return null
    }
  }, [page])


  return (
    <>
      <div className='button_row'>|
        <Nav buttonData={navData} onSelect={onHandleClick}></Nav>
      </div>
      {pageDisplay}
    </>
  )
}

export default App


