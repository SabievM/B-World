import { useEffect, useState } from 'react'
import './AdminPage.scss'
import { postSlide } from '../../requests/postSlide'
import { getSlides, SlidesResponseType } from '../../requests/getSlides'
import { deleteSlide } from '../../requests/deleteSlide'

const AdminPage = () => {

    const [slidesData, setSlidesData] = useState<SlidesResponseType[]>([])
    const [author, setAuthor] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const [slideToDelete, setSlideToDelete] = useState(0)

    useEffect(() => {
            try{
                const fetchData = async() => {
                    const resp = await getSlides()
                    setSlidesData(resp)
                }
                fetchData()
            } catch(err){
                console.log(err);
            }
        }, [slidesData])

    const addSlide = async() => {
        await postSlide({author: author, description: desc, image: image})
        alert("Добавлено")   
    }
    const deleteSlider = async() => {
        await deleteSlide(+slideToDelete)
    }
    
     return (
        <div className='adminpage'>
            <div className="container">
                <h2 style={{display: "flex", justifyContent: "center"}}>Страница администратора сайта</h2>
                {/* Добавление и удаление слайда */}
                <div className="slider-section">
                    <div className="add-slide">
                        <h2>Добавить слайд</h2>
                        <div className="form">
                            <label htmlFor="">
                                Имя автора
                            <input onChange={(e) => setAuthor(e.target.value)} type="text" name="" id="" placeholder='Автор'/>
                            </label>
                            <label htmlFor="">
                                Описание салйда
                            <input onChange={(e) => setDesc(e.target.value)} type="text" name="" id="" placeholder='Описание'/>
                            </label>
                            <label htmlFor="">
                                Изображение
                            <input onChange={(e) => setImage(e.target.value)} type="text" name="" id="" placeholder='Изображение'/>
                            </label>
                            <button onClick={addSlide} className="btn">Создать слайд</button>
                        </div>
                    </div>
                    <div className="delete-slide">
                        <h2>Удалить слайд</h2>
                        <div className="slide">
                            <div className="slide-authors">
                                {slidesData.map((item) => (
                                    <>
                                        <h2 onClick={() => setSlideToDelete(item.id)}>{item.params.author}</h2>
                                    </>
                                    
                                ))}
                                
                            </div>
                            <button onClick={deleteSlider} className="btn">Удалить слайд</button>
                        </div>
                        
                    
                    </div>
                </div>
                <hr />
                {/* Добавление и удаление бестселлера */}
                
            </div>
        </div>
    )
}

export default AdminPage