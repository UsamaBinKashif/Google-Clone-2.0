# Google Clone 2.0

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Video](#video)
  - [Built with](#built-with)
  - [Author](#author)
  - [Credits](#credits)
  
  
  
  


  <br>

## Links

- [Live URL](https://google-clonev2.vercel.app/)

<br>

## Video

https://user-images.githubusercontent.com/80617842/184796704-a1bd9786-4ba8-4367-845c-dda10f753dd4.mp4

<br>

## Built with
- React 
- Context API 
- Tailwind CSS 
- Google Search API 

<br>

### Custom Google Search ⬇
```javascript
const UseGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term]);

    return {data};
};
```
<br>

## Author

- Linkedin - [usamabinkashif](https://www.linkedin.com/in/usamabinkashif/)
- Frontend Mentor - [@UsamaBinKashif](https://www.frontendmentor.io/profile/UsamaBinKashif)

## Credits
- [Sonny Sangha](https://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA)
- [Clever Programmer](https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ)
