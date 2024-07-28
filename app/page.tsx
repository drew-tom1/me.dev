import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-4xl font-semibold tracking-tighter">
        hi, i'm drew!
      </h1>
      <hr />
      <p className="my-4">
        {`I'm a second year at San Jose State University studying cybersecurity and software engineering.
        I'm apart of some clubs on campus including SJSU's Software and Computer Engineering Society. I love learning about new things.
        In my freetime, I love playing with my cats, learning about investments, or nerding out over Warhammer 40,000!`}
      </p>
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  )
}
