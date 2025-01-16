import fs from 'fs';
import matter from 'gray-matter';
import { Heading, Stack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
// import TweetEmbed from 'react-tweet-embed';

import { ExternalPost, InternalPost, PageMetadata } from '../../components/UI';

import { getParsedDate, sortByDate } from '../../utils';

import { MarkdownPost } from '../../types';
import { POSTS_DIR } from '../../constants';

export const getStaticProps: GetStaticProps = async context => {
  // get list of files from the posts folder
  const files = fs.existsSync(POSTS_DIR) ? fs.readdirSync(POSTS_DIR) : [];

  // get frontmatter & slug from each post
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`${POSTS_DIR}/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter
    };
  });

  // return the pages static props
  return {
    props: {
      posts
    }
  };
};

interface Props {
  posts: MarkdownPost[];
}

// add here the list of external blog posts, with title, date and link
const externalLinks = [
  {
    title: 'ETH Rangers Program',
    date: '2024-12-02',
    link: 'https://blog.ethereum.org/2024/12/02/ethrangers-public-goods'
  },
  {
    title: 'Ethereum Protocol Attackathon Announcement',
    date: '2024-11-25',
    link: 'https://blog.ethereum.org/2024/11/25/ethereum-protocol-attackathon'
  },
  {
    title: 'Secured #6 - Writing Robust C - Best Practices for Finding and Preventing Vulnerabilities',
    date: '2023-11-02',
    link: 'https://blog.ethereum.org/2023/11/02/writing-robust-c'
  },
  {
    title: 'Secured #5 - Public Vulnerability Disclosures',
    date: '2023-05-03',
    link: 'https://blog.ethereum.org/2023/05/03/secured-5-disclosures-update'
  },
  {
    title: 'Secured #4 - Bug Bounty Rewards to $250,000',
    date: '2022-05-16',
    link: 'https://blog.ethereum.org/2022/05/16/secured-no-4'
  },
  {
    title: 'Secured #3 - Security Teams',
    date: '2022-04-22',
    link: 'https://blog.ethereum.org/2022/04/14/secured-no-3'
  },
  {
    title: 'Secured #2 - Public Vulnerability Disclosures',
    date: '2022-03-09',
    link: 'https://blog.ethereum.org/2022/03/09/secured-no-2'
  },
  {
    title: 'Secured #1 - BLS is Everywhere',
    date: '2021-09-09',
    link: 'https://blog.ethereum.org/2021/09/09/secured-no-1'
  },  
];

const Blog: NextPage<Props> = ({ posts }) => {
  const internalPosts = posts.map(post => {
    //extract slug and frontmatter
    const { slug, frontmatter } = post;
    //extract frontmatter properties
    const { title, date } = frontmatter;
    //JSX for individual blog listing
    return <InternalPost key={slug} date={date} slug={slug} title={title} />;
  });

  const externalPosts = externalLinks.map(({ date, link, title }) => (
    <ExternalPost key={link} date={date} link={link} title={`${title} ↗`} />
  ));

  return (
    <>
      <PageMetadata
        title='Blog'
        description='View latest posts from the Protocol Security Research team'
      />

      <main>
        <Heading as='h1' mb={10}>
          Blog
        </Heading>

        <Stack spacing={2}>{internalPosts.concat(externalPosts).sort(sortByDate)}</Stack>

      </main>
    </>
  );
};

export default Blog;
