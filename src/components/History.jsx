import { useSelector } from "react-redux";

function History() {

    const history = useSelector(
        state => state.interaction.history
    );

    return (

        <div className="card">

            <h2>Recent Interactions</h2>

            {

                history.map((item,index)=>(

                    <div key={index}>

                        <h4>{item.doctor}</h4>

                        <p>{item.summary}</p>

                        <hr/>

                    </div>

                ))

            }

        </div>

    );

}

export default History;