import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Page from './components/page/Page.tsx';
import { IButton } from './components/page/nav/Button.tsx';
import Nav from './components/page/nav/Nav.tsx';

import { IDataItem, load } from "./server";

/**function with whole app */
const App = () => {
  /** Data */
  const [data, setData] = useState<IDataItem[]>();

  /** Load data */
  useEffect(() => {
    (async () => {
      const data = await load();
      setData(data);
      console.log(data[0].id)
    })()
  }, [])
  
  // set page variable to start as 'capybara'
  const [page, setPage] = useState('capybara')
  
  // when click, set page variable to be id of button 
  const onHandleClick = (id: string) => {
    setPage(id)
  }
  
  //creating nav bar data variable using memo that checks if data has been loaded and then maps through json creating buttons
  const navData = useMemo(() => {
    if (!data) {
      return
    }

    const navData: Omit<IButton, 'onSelect'>[] = data.map((item) => {
      return {
        id: item.id,
        label: item.label
      }
    })

    return navData;
  }, [data])


  useEffect(() => {
    console.log(navData)
  }, [navData])

  
  // creating page display variable using memo that reads through json and displays page using data
  const pageDisplay = useMemo(() => {

    if (!data) {
      return
    }

    const pageData = data.find((item) => {
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
            links = {pageData.links}
            
            
          ></Page>
        </div>
      )
    } else {
      return null
    }
  }, [page,data])

  
  useEffect(() => {
    console.log(pageDisplay)
  }, [pageDisplay])

  
  // return statement displaying everything
  return (
    <>
      <div className='button_row'>
        {navData && (
          <Nav buttonData={navData} onSelect={onHandleClick}></Nav>
        )}
      </div>
      {pageDisplay}
    </>
  )
}

export default App


