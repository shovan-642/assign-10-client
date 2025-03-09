import React from 'react';

const News = () => {
    return (
        <div className='w-9/12 mx-auto mb-10'>
            <h1 className='py-3 font-bold text-2xl'>Latest Movie News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                <div className="single_news">
                    <img className='w-80 h-40' src="https://i.ibb.co.com/v6jdvzGS/cap3-0.jpg" alt="" />
                     <h1 className='text-gray-500 uppercase font-bold'>Movies</h1>
                     <p>Composer Laura Karpman Used Wind-Up Toys and a Vintage Radio to Score ‘Captain America: Brave New World’</p>   
                </div>
                <div className="single_news">
                    <img className='w-80 h-40' src="https://i.ibb.co.com/ynGhspjY/marvel-must-haves-20250214-cabnw-article-card.jpg
s" alt="" />
                     <h1 className='text-gray-500 uppercase font-bold'>Gear</h1>
                     <p>Shop Marvel Must Haves: Captain America Collectibles</p>   
                </div>
                <div className="single_news">
                    <img className='w-80 h-40' src="https://i.ibb.co.com/gZ5gny7J/skins-samwilson-bravenewworld-landscape-postrelease-02.jpg" alt="" />
                     <h1 className='text-gray-500 uppercase font-bold'>Games</h1>
                     <p>Unlock 'Brave New World' Costume in 'MARVEL Strike Force'</p>   
                </div>
                <div className="single_news">
                    <img className='w-80 h-40' src="https://i.ibb.co.com/Ld64gPVF/marvel-must-haves-20250221-captain-america-brave-new-world-article-card-2.jpg" alt="" />
                     <h1 className='text-gray-500 uppercase font-bold'>Gear</h1>
                     <p>Shop Marvel Must Haves for 'Captain America: Brave New World'</p>   
                </div>


            </div>
        </div>
    );
};

export default News;