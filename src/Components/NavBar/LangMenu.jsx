import { useContext, useEffect, useRef } from 'react';
import NavContext from '../../Context/NavContext';
import Region from './Region';
import Currency from './Currency';
import './LangMenu.css';

function LangMenu() {
    const {langMenuRef, closeLangMenu, langMenuOption, setLangMenuOption} = useContext(NavContext);
    const languageButtonRef = useRef();
    const currencyButtonRef = useRef();

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const clickedElement = event.target;
            if (clickedElement !== languageButtonRef.current && clickedElement !== currencyButtonRef.current) {
                if (langMenuOption === 'language') {
                    languageButtonRef.current.focus();
                } else if (langMenuOption === 'currency') {
                    currencyButtonRef.current.focus();
                }
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [langMenuOption]);

    return ( 
        <div className='cover-screen'>
            <div className='lang-menu-container' ref={langMenuRef}>
                <div className="lang-menu-header-container">
                    <div id="lang-menu-close-btn" onClick={closeLangMenu}>
                        <button>
                            <svg viewBox='0 0 32 32'>
                                <path d="m6 6 20 20"></path>
                                <path d="m26 6-20 20"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lang-menu-body-container">
                    <div className="lang-menu-body-content">
                        <div className="lang-menu-body-content-controller-container">
                            <div className="lang-menu-body-content-controller">
                                <button id='lang-language-btn' onClick={() => setLangMenuOption('language')} 
                                style={
                                    (langMenuOption === 'language') ?
                                    {color: '#000000', cursor: 'default'} :
                                    {color: '#717171', cursor: 'pointer'}
                                } 
                                autoFocus={(langMenuOption === 'language') ? true : false}
                                ref={languageButtonRef}>
                                    Language and region
                                </button>
                                <button id='lang-currency-btn' onClick={() => setLangMenuOption('currency')}
                                    style={
                                        (langMenuOption === 'currency') ?
                                        {color: '#000000', cursor: 'default'} :
                                        {color: '#717171', cursor: 'pointer'}
                                }
                                autoFocus={(langMenuOption === 'currency') ? true : false}
                                ref={currencyButtonRef}>
                                    Currency
                                </button>
                            </div>
                        </div>
                        <div className="selected-content-container">
                            {(langMenuOption === 'language') && (
                                <Region />
                            )}
                            {(langMenuOption === 'currency') && (
                                <Currency />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LangMenu;