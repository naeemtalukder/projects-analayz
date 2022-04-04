import React from 'react';

const Blogs = () => {
    return (
        <div className='font-light mx-auto'>
            <p className='text-center font-serif text-3xl p-5 text-cyan-600 font-bold'>Question and Answers</p>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto p-2 gap-7'>
                <div className='bg-slate-100 p-10 rounded-lg'>
                    <p className='text-black font-bold'>What is a semantic tag?</p>
                    <p>Semantic tags are introduced in HTML5.The word ewmantic means those describe themselves.
                        So the Semantic tags are own deginition and according to their name.
                        Examples are: footer, Header, nav, blockquote etc.
                        By the name of these tags we can understand the purpose of using these instead of using divs for all purpose.
                    </p>
                </div>
                <div className='bg-slate-100 p-10 rounded-lg'>
                    <p className='text-black font-bold'>What is Inline block and Inline element diffarent ?</p>
                    <p>Block elements are a kind of blocks where there are many elements in a line itself.
                        While inline elements take up the space of an entire line and there will be only one line within the space width.
                        Inline elements do not respect the top and bottom margins but only the left and right and also consider the padding</p>
                </div>
                <div className='bg-slate-100 p-10 rounded-lg'>
                    <p className='text-black font-bold'>What is Contex API?</p>
                    <p>In react, while passing different data, we have to drill through all the parent component to send the data to the child component.
                        The context API can be used to solve issue.
                        We can just call the in the top nmost parent container and then the data can be sent to loewr child components useing context API.
                        We create acontext in the parent component and can acess it the child components without props drilling by using context provider.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;