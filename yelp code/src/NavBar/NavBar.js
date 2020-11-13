import React from 'react';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

export function NavBar(props) {
    return (
        <div className={styles['nav-bar']}>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
        </div>
    );
}