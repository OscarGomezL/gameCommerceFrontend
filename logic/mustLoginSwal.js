import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
const Swal2 = WithReactContent(NonReactSwal)
export function mustLogin() {
	Swal2.fire({
		title: "You must login to make use of this functionality",
		text: 'Try clicking the "My Account" button',
		color:"#432",
		background: "rgb(230,178,77)",
		confirmButtonColor: "rgb(230,178,77)",
	})
}