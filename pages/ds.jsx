import Layout from "../components/Layout"

export default function DS() {
	let arrForImgs = []
	for(let i = 1; i<11; i++) arrForImgs.push(i)
	console.log(arrForImgs)
	return (
		<div className='page'>
			<Layout ds={true}>
				{arrForImgs.map(num=><img key={`ds${num}`} src={`http://localhost:4000/v1/dsGamesImages/ds${num}.jpg`}/>)}	
			</Layout>
		</div>
	)
}