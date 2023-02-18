import index from './index'
import starring from './starring'

const c202201 = {
    ...index[0],
    starring,
    chat: [
        {
            title: '',
            author: '',
            session: [
                {
                    ...starring[0],
                    message: 'hello',
                    image: ''
                },
                {
                    ...starring[0],
                    message: 'hello',
                    image: ''
                },
                {
                    ...starring[1],
                    message: 'hello',
                    image: ''
                }
            ]
        },
        {
            title: '',
            author: '',
            session: [
                {
                    ...starring[0],
                    message: '你好',
                    image: ''
                },
                {
                    ...starring[1],
                    message: '你好',
                    image: ''
                },
                {
                    ...starring[2],
                    message: '你好',
                    image: '/images/magazine/c202201/c202201_img.jpg'
                }
            ]
        }
    ]
}

export default c202201