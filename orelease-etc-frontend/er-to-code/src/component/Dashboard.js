
const Dashboard = ()=>{

    return(
        <div className="dashboard_container">
            <h2 style={{textDecoration:"underline"}}>Dashboard</h2>
            <main className="dashboard_main">
                <section className="dashboard_panel_left">
                    <menu> 
                        <div> 
                            <svg width="30" height="30" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.7559 13.7385L58.6834 43.0308C58.956 44.0384 59.0254 45.0892 58.8879 46.1234C58.7503 47.1576 58.4083 48.1548 57.8815 49.0581C57.3548 49.9613 56.6535 50.753 55.8177 51.3879C54.9819 52.0228 54.028 52.4885 53.0105 52.7583L34.6996 57.6163C32.6451 58.1615 30.456 57.8762 28.6138 56.8233C26.7716 55.7704 25.4272 54.036 24.8763 52.0016L16.9459 22.7064C16.6734 21.6987 16.604 20.6476 16.7418 19.6133C16.8795 18.579 17.2217 17.5817 17.7488 16.6784C18.2759 15.775 18.9775 14.9834 19.8136 14.3486C20.6497 13.7139 21.6039 13.2485 22.6217 12.9789L40.9325 8.12098C41.9501 7.85106 43.0113 7.78226 44.0556 7.9185C45.1 8.05474 46.107 8.39335 47.0192 8.915C47.9314 9.43664 48.7309 10.1311 49.372 10.9587C50.0132 11.7864 50.4834 12.731 50.7559 13.7385ZM31.9784 22.4581C31.8808 22.0901 31.7108 21.7449 31.4781 21.4422C31.2454 21.1395 30.9546 20.8853 30.6224 20.6942C30.2902 20.5031 29.9232 20.3789 29.5424 20.3287C29.1616 20.2785 28.7745 20.3033 28.4034 20.4016C28.0323 20.4999 27.6845 20.6699 27.3799 20.9018C27.0753 21.1336 26.82 21.4227 26.6285 21.7526C26.4371 22.0824 26.3134 22.4464 26.2645 22.8237C26.2155 23.2011 26.2423 23.5842 26.3434 23.9513C26.5462 24.688 27.0355 25.3153 27.7041 25.6958C28.3727 26.0763 29.1664 26.1791 29.9113 25.9817C30.6563 25.7843 31.292 25.3027 31.6794 24.6424C32.0668 23.9821 32.1743 23.1967 31.9784 22.4581ZM16.9196 33.7712L22.0588 52.7467C22.5639 54.627 23.5738 56.3367 24.9813 57.6942L23.6892 57.6278C21.5651 57.5173 19.5723 56.5759 18.1491 55.0106C16.7259 53.4453 15.9888 51.3843 16.1 49.2809L16.9196 33.7712ZM14.2217 29.4995L13.1863 49.1278C13.0784 51.1467 13.5363 53.0644 14.423 54.7309L13.2155 54.2688C12.232 53.8951 11.3326 53.3332 10.5684 52.6152C9.80429 51.8972 9.19047 51.0372 8.762 50.0843C8.33353 49.1314 8.0988 48.1042 8.07123 47.0615C8.04366 46.0187 8.22377 44.9808 8.6013 44.007L14.2217 29.4995Z" fill="white"/>
                            </svg>
                            <h4>Quick guide</h4>
                        </div>
                        <div> 
                            <svg width="30" height="30" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_103_65)">
                                    <path d="M17.08 8.59607C21.7788 6.4819 28.1181 5.22986 35 5.22986C41.8819 5.22986 48.2212 6.4819 52.92 8.59607C57.4219 10.6236 61.25 13.8642 61.25 18.2268C61.25 22.5895 57.4219 25.83 52.92 27.8575C48.2212 29.9717 41.8819 31.2238 35 31.2238C28.1181 31.2238 21.7788 29.9717 17.08 27.8575C12.5781 25.83 8.75 22.5895 8.75 18.2268C8.75 13.8642 12.5781 10.6236 17.08 8.59607Z" fill="white"/>
                                    <path d="M8.75 27.589V31.2238C8.75 35.5864 12.5781 38.827 17.08 40.8545C21.7788 42.9644 28.1181 44.2208 35 44.2208C41.8819 44.2208 48.2212 42.9687 52.92 40.8545C57.4219 38.827 61.25 35.5864 61.25 31.2238V27.589C59.2506 29.4606 56.8575 30.8426 54.7313 31.8C49.3413 34.2261 42.3587 35.5561 35 35.5561C27.6413 35.5561 20.6587 34.2261 15.2688 31.8C13.1425 30.8469 10.7494 29.4606 8.75 27.589Z" fill="white"/>
                                    <path d="M8.75 40.5859V44.2208C8.75 48.5834 12.5781 51.824 17.08 53.8515C21.7788 55.9657 28.1181 57.2177 35 57.2177C41.8819 57.2177 48.2212 55.9657 52.92 53.8515C57.4219 51.824 61.25 48.5834 61.25 44.2208V40.5859C59.2506 42.4575 56.8575 43.8395 54.7313 44.7969C49.3413 47.223 42.3587 48.5531 35 48.5531C27.6413 48.5531 20.6587 47.223 15.2688 44.7969C13.1425 43.8438 10.7494 42.4575 8.75 40.5859Z" fill="white"/>
                                    <path d="M8.75 53.5829V57.2177C8.75 61.5803 12.5781 64.8209 17.08 66.8484C21.7788 68.9626 28.1181 70.2146 35 70.2146C41.8819 70.2146 48.2212 68.9626 52.92 66.8484C57.4219 64.8209 61.25 61.5803 61.25 57.2177V53.5829C59.2506 55.4544 56.8575 56.8365 54.7313 57.7939C49.3413 60.22 42.3587 61.55 35 61.55C27.6413 61.55 20.6587 60.22 15.2688 57.7939C13.1425 56.8408 10.7494 55.4544 8.75 53.5829Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_103_65">
                                        <rect width="70" height="69.3171" fill="white" transform="translate(0 0.897583)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4>New Project</h4>
                        </div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.609741H70V69.9268H0V0.609741ZM16.0417 52.0632C16.0417 52.5542 16.1248 53.038 16.2838 53.4943C11.4476 48.6379 8.74055 42.0888 8.75 35.2683C8.75 20.9124 20.5027 9.27437 35 9.27437C49.4973 9.27437 61.25 20.9124 61.25 35.2683C61.2594 42.0994 58.5439 48.6577 53.6944 53.516C53.9225 52.8991 54.0055 52.2387 53.9369 51.5852C53.8684 50.9317 53.6501 50.3023 53.2988 49.745C52.9475 49.1877 52.4724 48.7171 51.9096 48.369C51.3469 48.021 50.7114 47.8047 50.0515 47.7367C38.7377 46.5771 31.3323 46.4659 19.9631 47.7107C18.8831 47.8318 17.8861 48.3428 17.1627 49.1461C16.4393 49.9493 16.0401 50.9869 16.0417 52.0632ZM5.83333 35.2683C5.83333 50.8242 18.254 63.5092 33.81 64.1273C34.1392 64.1456 34.469 64.1528 34.7988 64.1489L35 64.1504C51.1087 64.1504 64.1667 51.2199 64.1667 35.2683C64.1667 19.3167 51.1087 6.38616 35 6.38616C18.8913 6.38616 5.83333 19.3167 5.83333 35.2683ZM35 41.0447C38.0942 41.0447 41.0617 39.8275 43.2496 37.6609C45.4375 35.4944 46.6667 32.5559 46.6667 29.4919C46.6667 26.4278 45.4375 23.4893 43.2496 21.3228C41.0617 19.1562 38.0942 17.939 35 17.939C31.9058 17.939 28.9383 19.1562 26.7504 21.3228C24.5625 23.4893 23.3333 26.4278 23.3333 29.4919C23.3333 32.5559 24.5625 35.4944 26.7504 37.6609C28.9383 39.8275 31.9058 41.0447 35 41.0447Z" fill="white"/>
                            </svg>
                            <h4>Profile</h4>
                        </div>
                    </menu>
                    <div style={{justifyContent:"center"}}>
                        <svg width="30" height="30" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.16667 21.2389L1.54167 19.9496L0.5 21.2389L1.54167 22.5283L3.16667 21.2389ZM21.9167 23.3019C22.4692 23.3019 22.9991 23.0846 23.3898 22.6977C23.7805 22.3108 24 21.7861 24 21.2389C24 20.6918 23.7805 20.1671 23.3898 19.7802C22.9991 19.3933 22.4692 19.1759 21.9167 19.1759V23.3019ZM9.875 9.63452L1.54167 19.9496L4.79167 22.5283L13.125 12.2133L9.875 9.63452ZM1.54167 22.5283L9.875 32.8434L13.125 30.2646L4.79167 19.9496L1.54167 22.5283ZM3.16667 23.3019H21.9167V19.1759H3.16667V23.3019Z" fill="white"/>
                            <path d="M19.8334 13.2593V11.7264C19.8334 8.38643 19.8334 6.71746 20.8209 5.56424C21.8084 4.40895 23.4709 4.13457 26.7959 3.58375L30.2792 3.01023C37.0355 1.89621 40.4125 1.3392 42.623 3.19178C44.8334 5.04642 44.8334 8.43801 44.8334 15.2191V27.2568C44.8334 34.0399 44.8334 37.4315 42.625 39.2841C40.4125 41.1408 37.0355 40.5838 30.2792 39.4677L26.7959 38.8921C23.4709 38.3434 21.8084 38.069 20.8209 36.9158C19.8334 35.7605 19.8334 34.0895 19.8334 30.7494V29.6251" stroke="white" stroke-width="2"/>
                        </svg>
                        <h4>Sign out</h4>
                    </div>
                </section>
                <section className="dashboard_panel_right">
                
                </section>
            </main>
            
        </div>
    );
}


export default Dashboard;


