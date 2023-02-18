import index from './index'
import starring from './starring'

const c202103 = {
    ...index[1],
    starring,
    chat: [
        {
            title: '',
            author: '',
            session: [
                {
                    ...starring[0],
                    message: '早上好',
                    image: ''
                },
                {
                    ...starring[1],
                    message: '下午好',
                    image: ''
                },
                {
                    ...starring[2],
                    message: '晚上好',
                    image: ''
                }
            ]
        }
    ]
}

export default c202103