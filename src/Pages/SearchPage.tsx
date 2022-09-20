import { useSelector } from 'react-redux';
import Search from '../Components/Search/Search';
import SearchMap from '../Components/Search/SearchMap';

const SearchPage = () => {
    const { sitters } = useSelector(state => state) as any;

    return(
        <div>
            <h1>SearchPage</h1>
            <Search/> 
            <h2>I found these sitters:</h2>
            <ul>
                {sitters.map((item: any) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
            <div><SearchMap/></div>
        </div>
    )

}

export default SearchPage;