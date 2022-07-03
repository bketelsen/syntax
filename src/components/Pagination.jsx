import { ButtonLink, Button} from './Button'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="max-w-2xl pt-6 pb-8 mx-auto space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <Button  className="cursor-auto disabled:opacity-50" disabled={!prevPage} >Previous</Button>
        )}
        {prevPage && (
          <ButtonLink href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>Previous</ButtonLink>
        )}
        <span className='text-slate-500'>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <Button  className="cursor-auto disabled:opacity-50" disabled={!nextPage} >Next</Button>
        )}
        {nextPage && (
          <ButtonLink href={`/blog/page/${currentPage + 1}`}>
        Next
          </ButtonLink>
        )}
      </nav>
    </div>
  )
}
