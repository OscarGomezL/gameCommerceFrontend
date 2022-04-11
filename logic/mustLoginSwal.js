import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
const Swal2 = WithReactContent(NonReactSwal)
export function mustLogin() {
	Swal2.fire({
		title: "You must login to make use of this functionality",
		text: 'Try clicking the "My Account" button',
		color:"var(--brown_1)",
		background: "var(--brown_3)",
		confirmButtonColor: "var(--brown_3)",
	})
}