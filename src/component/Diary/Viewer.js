import { emotionList, getEmotionImgById, getFormattedDate } from '../../util';
import './Viewer.css';

const Viewer = ({ date, content, emotionId }) => {
    const emotionItem = emotionList.find(e=>e.id === emotionId);
    return (
    <div className='Viewer'>
        <h4>오늘의 날짜</h4>
        <div className='date_wrapper'>
            <p>{getFormattedDate(date, "yyyy-MM-DD")}{' ('}{getFormattedDate(date, "요일")}{') '}{' 🗓️'}</p>
        </div>
        <h4>오늘의 감정</h4>
        <div className={['emotion_img_wrapper', `EmotionItem_on_${emotionId}`].join(' ')}>
            <img alt={emotionItem.name} src={getEmotionImgById(emotionId)}/>
            <span className='emotion_name'>{emotionItem.name}</span>
        </div>
        <h4>오늘의 일기</h4>
        <div className='content_wrapper'>
            <textarea readOnly rows={6} >{content}</textarea>
        </div>
    </div>
    )
}

export default Viewer;