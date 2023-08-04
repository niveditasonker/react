import { useState, useEffect } from "react"

export const usePagination = (list, pageSize, filterOn) => {
    const [pageIdx, setPageIdx] = useState(0);
    const [paginatedList, setPaginatedList] = useState([]);

    useEffect(() => {
        let currentWindow = pageIdx * pageSize;

        let slicedArr = list.slice(currentWindow, currentWindow + pageSize);
        setPaginatedList(slicedArr);

        console.log("====> Called usePagination useEffect");
    }, [pageIdx, list, pageSize, filterOn]);

    
    const getPrevPage = ()=> {
        if (pageIdx === 0) {
            return;
        }
        setPageIdx((prev) => prev - 1);
    }
    
    const getNextPage = () =>{
    // Calculate the last page and makes sure the pageIndex
    // doesn't go out of that boundary
    if (pageIdx === Math.ceil(list.length / pageSize) - 1) {
        return;
      }
      setPageIdx((prev) => prev + 1);
    }

    return [
        getNextPage,
        getPrevPage,
        pageIdx,
        Math.ceil(list.length / pageSize),
        paginatedList
    ];
}

/*

// export const usePagination = ({totalCount, pageSize, currentPage}) => {
export const usePagination = (books, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    const calculateRange = (books, rowsPerPage) => {
        const range = [];
        const num = Math.ceil(books.length / rowsPerPage);
        let i = 1;
        for (let i = 1; i <= num; i++) {
        range.push(i);
        }
        return range;
    };

    const sliceData = (books, page, rowsPerPage) => {
        return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    };

    useEffect(() => {
        const range = calculateRange(books, rowsPerPage);
        setTableRange([...range])
        
        const sliceBooksArr = sliceData(books, page, rowsPerPage);
        setSlice([...sliceBooksArr]);
    }, [books, setTableRange, slice, setSlice])



    // const paginationRange = useMemo(() => {

    //     const totalPageCount = Math.ceil(totalCount / pageSize);

    // }, [totalCount, pageSize, currentPage])

    return { slice, range: tableRange };
}

*/