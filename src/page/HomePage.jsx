
import FrequentlyAskQuestion from './FrequentlyAskQuestion';
import MenuBar from './MenuBar';
import Product from './Product';

const HomePage = () => {
    return (
        <div>
           <MenuBar/> 
           <Product/>
           <FrequentlyAskQuestion/>
        </div>
    );
};

export default HomePage;