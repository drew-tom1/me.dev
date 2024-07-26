import { BlogPosts } from 'src/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        hi, i'm drew!
      </h1>
      <p className="mb-4">
        {`I'm a second year at San Jose State University studying cybersecurity and information technology.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
