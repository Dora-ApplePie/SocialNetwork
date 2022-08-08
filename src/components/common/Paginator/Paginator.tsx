import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {getUsersTC} from '../../../redux/usersReducer'
import {useAppDispatch} from '../../../hooks/hooks'
import styles from '../../Body/Users/Users.module.css'

type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            pageSize,
                                                            totalItemsCount,
                                                            currentPage
                                                        }) => {
    const [page, setPage] = useState(currentPage)
    const dispatch = useAppDispatch()
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages: Array<number> = []

    if (currentPage <= 3) {
        for (let i = 1; i <= 7; i++) {
            pages.push(i)
        }
    } else if (currentPage + 3 >= pagesCount) {
        for (let i = (currentPage - 3); i <= pagesCount; i++) {
            pages.push(i)
        }
    } else {
        for (let i = (currentPage - 3); i <= (currentPage + 3); i++) {
            pages.push(i)
        }
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    }
    const inChangeInputNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber > pagesCount) setPage(Math.floor(pagesCount))
        else if (e.currentTarget.valueAsNumber < 1) setPage(1)
        else setPage(e.currentTarget.valueAsNumber)
    }
    const onKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onPageChanged(page)
    }

    return (
        <div>
            {pages.map(page =>
                <span key={page}
                      className={currentPage === page ? styles.selectedPage : styles.page}
                      onClick={() => onPageChanged(page)}>
                        {page}
                    </span>
            )}
            <input type="number" min={1} max={pagesCount} value={page}
                   onChange={inChangeInputNumberHandler}
                   onKeyUp={onKeyEnter}/>
            <button onClick={() => onPageChanged(Math.floor(page))}>go</button>
        </div>
    )
}