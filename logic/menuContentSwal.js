import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
const Swal2 = WithReactContent(NonReactSwal)

export function reportBugsSwal() {
	Swal2.fire({
		title:"Report a Bug",
		html: `
			<p>Did you find a bug? I would really appreciate if you notify me any sort of bug that you found in my software through this medium so I can fix it :)</p>
			<input id="bug-swal-input" type="text" placeholder="Describe the bug" class="swal2-input"/>
		`,
		color:"var(--brown_1)",
		confirmButtonText:"Report the bug",
		background: "var(--brown_3)",
		confirmButtonColor: "var(--brown_3)",
	})
}
export function sendSuggestionsSwal() {
	Swal2.fire({
		title:"Send a Suggestion",
		html: `
			<p>Do you have a suggestion to improve GameCommerce? I would love to receive any sort of recommendation to make GameCommerce better through this medium :)</p>
			<input id="suggestion-swal-input" type="text" placeholder="Describe your suggestion" class="swal2-input"/>
		`,
		color:"var(--brown_1)",
		confirmButtonText:"Send The Suggestion",
		background: "var(--brown_3)",
		confirmButtonColor: "var(--brown_3)",
	})
}