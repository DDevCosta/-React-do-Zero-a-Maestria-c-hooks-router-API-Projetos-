const TemplateExpressions = () => {

    const name = "Rei Arthur"
    const data = {
        age: 31,
        job: "Vagabundo"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{9 / 3}</p>
        </div>
    )

}

export default TemplateExpressions