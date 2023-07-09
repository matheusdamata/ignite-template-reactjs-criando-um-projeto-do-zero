import { GetStaticProps } from 'next'

import { getPrismicClient } from '../services/prismic'

import commonStyles from '../styles/common.module.scss'
import styles from './home.module.scss'

import Header from '../components/Header'

import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { formatDate } from '../utils/formatter'

interface Post {
  uid?: string
  first_publication_date: string | null
  data: {
    title: string
    subtitle: string
    author: string
  }
}

interface PostPagination {
  next_page: string
  results: Post[]
}

interface HomeProps {
  postsPagination: PostPagination
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <div className={styles.homecontainer}>
      <Header />

      <div className={styles.homecontent}>
        <div className={styles.postlistcontainer}>
        {postsPagination.results.map((post) => (
          <div className={styles.postcontainer}>
            <div className={styles.postheader} key={post.uid}>
              <h2>{post.data.title}</h2>
              <p>{post.data.subtitle}</p>
            </div>

            <div className={styles.postfooter}>
              <div>
                <AiOutlineCalendar size={20} />
                <span>{formatDate(new Date(post.first_publication_date))}</span>
              </div>

              <div>
                <FiUser size={20} />
                <span>{post.data.author}</span>
              </div>
            </div>
          </div>
        ))}
        </div>

        <button>Carregar mais posts</button>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  const postsResponse = await prismic.getByType('posts')

  console.log(postsResponse)

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: postsResponse.results,
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
