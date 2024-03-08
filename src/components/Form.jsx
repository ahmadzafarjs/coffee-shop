

function Form({children, onSubmit}) {
  return (
    <form onSubmit={onSubmit} className="my-9 flex flex-col w-[300px] m-auto gap-2">
        {children}
    </form>
  )
}

function Input({id, label, value, onChange}){
    return <>
    <label className="text-amber-800 font-semibold" htmlFor={id}>{label}</label>
    <input className="outline-amber-700 px-3 py-2 bg-amber-200 rounded text-slate-700" name={id} id={id} value={value} onChange={onChange} />
    </>
}



Form.Input = Input

export default Form
