import { Image,Box } from '@chakra-ui/react'


export default function LoadingSpinner() {
    return (
        <div>
            <Box className='loading' boxSize='sm'>
                <Image  src='http://meqasa.com/blog/wp-content/uploads/2019/05/giphy.gif' alt='Dan Abramov' />
            </Box>
        </div>
    )
}