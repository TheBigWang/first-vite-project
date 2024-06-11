import Data from './data/data.json';

export interface IDataItem {
    id: string;
    label : string;
    title: string;
    header: string;
    text: string;
    img: string;
    links: ILinkItem[];
}

export interface ILinkItem{
    
    link: string;
    type: string;
}



export const load = () => {
    const DELAY = 2000;

    return new Promise<IDataItem[]>((resolve) => {
        setTimeout(() => {
            resolve(Data as IDataItem[]);
        }, DELAY)
    })
}