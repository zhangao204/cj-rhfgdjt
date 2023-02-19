import index from './index'
import starring from './starring'

const c202301 = {
    ...index[1],
    starring,
    chat: [
        {
            title: '',
            author: '',
            session: [
                {
                    ...starring[5],
                    message: '第二期俺还没写捏',
                    image: ''
                }
            ]
        },
    ]
}

export default c202301