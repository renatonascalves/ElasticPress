/**
 * WordPress dependencies.
 */
import { __, sprintf } from '@wordpress/i18n';

/**
 * Search results component.
 *
 * @param {Object}   props            Props.
 * @param {number}   props.offset     Current items offset.
 * @param {Function} props.onNext     Next button handler.
 * @param {Function} props.onPrevious Previous button handler.
 * @param {number}   props.perPage    Items per page.
 * @param {number}   props.total      Total number of items.
 * @return {WPElement} Element.
 */
export default ({ offset, onNext, onPrevious, perPage, total }) => {
	/**
	 * Current page number.
	 */
	const currentPage = (offset + perPage) / perPage;

	/**
	 * Whether there are more pages.
	 */
	const nextIsAvailable = total > offset + perPage;

	/**
	 * Whether the are previous pages.
	 */
	const previousIsAvailable = offset > 0;

	/**
	 * Total pages.
	 */
	const totalPages = Math.ceil(total / perPage);

	return (
		<nav className="ep-search-pagination">
			<div className="ep-search-pagination__previous">
				{previousIsAvailable && (
					<button
						className="ep-search-pagination-button ep-search-pagination-button--previous"
						onClick={onPrevious}
						type="button"
					>
						{__('Previous', 'elasticpress')}
					</button>
				)}
			</div>

			<div className="ep-search-pagination__count" role="status">
				{total > 0 &&
					sprintf(
						/* translators: %1$d: current page. %2$d: total pages. */
						__('Page %1$d of %2$d', 'elasticpress'),
						currentPage,
						totalPages,
					)}
			</div>

			<div className="ep-search-pagination__next">
				{nextIsAvailable && (
					<button
						className="ep-search-pagination-button ep-search-pagination-button--next"
						onClick={onNext}
						type="button"
					>
						{__('Next', 'elasticpress')}
					</button>
				)}
			</div>
		</nav>
	);
};
