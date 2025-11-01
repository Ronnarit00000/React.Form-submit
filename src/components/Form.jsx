export function Form(props){
  let { className, children, onSubmit } = props;

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  )
};

export function Select(props){
  let {name, action} = props;

  return (
    <div className={name.className}>
      <label htmlFor={name.id}>{name.label}</label>
      <select id={name.id} value={action.value} onChange={action.onChange} >
        <option>{action.defaultValue}</option>
        <optgroup label="Beginers">
          {action.list.Beginers.map((el, i) => (
            <option key={i} value={el}>{el}</option>
          ))}
        </optgroup>
        <optgroup label="Advance">
          {action.list.Advance.map((el, i) => (
            <option key={i} value={el}>{el}</option>
          ))}
        </optgroup>
      </select>
    </div>
  )
};

export function Textarea(props){
  let {name, action} = props;

  return (
    <div className={name.className}>
      <label htmlFor={name.id}>{name.label}</label>
      <textarea name={name.name} id={name.id} value={action.value} onChange={action.onChange} rows={10} placeholder={name.placeholder}></textarea>
    </div>
  )
}

export function Input(props){
  let {type, name, action} = props;

  switch (type){
    case "radio" : 
      return Radio({type, name, action});

    case "checkbox" :
      return Checkbox({type, name, action});

    case "file" :
      return File({type, name, action});

    case "url" : 
      return Url({type, name, action});

    default:
      return Default({type, name, action});
  }
};

function Radio({type, name, action}){
  return (
    <div className={name.className}>
      <span>{name.title}</span>
      { action.list.map((el, i) => (
        <div key={i}>
          <input 
            type={type} 
            name={name.title}
            value={el.choose.value}
            id={el.choose.id} 
            onChange={action.onChange}
            checked={el.choose.checked}
            />
          <label htmlFor={el.choose.id}>{el.choose.label}</label>
        </div>
      ))}
    </div>
  )
};

function Checkbox({type, name, action}){
  return (
    <div className={name.className}>
      <span>{name.title}</span>
      { action.list.map((el, i) => (
        <div key={i}>
          <input 
            type={type} 
            name={el.choose.name}
            value={el.choose.value}
            id={el.choose.id} 
            onChange={el.choose.onChange}
            checked={el.choose.checked}
            />
          <label htmlFor={el.choose.id}>{el.choose.label}</label>
        </div>
      ))}
    </div>
  )
};

function File({type, name, action}){
  return (
    <div className={name.className}>
      <label htmlFor={name.id}>{name.label}</label>
      <fieldset>
        <input 
          type={type} 
          name={name.name} 
          id={name.id} 
          onChange={action.onChange}
          />
      </fieldset>
    </div>
  )
};

function Url({type, name, action}){
  return (
    <div className={name.className}>
      <label htmlFor={name.id}>{name.label}</label>
      <input 
        type={type} 
        name={name.name} 
        id={name.id}
        placeholder={name.placeholder}
        value={action.value}
        onChange={action.onChange}
        />
    </div>
  )
};

function Default({type, name, action}){
  return (
    <div className={name.className}>
      <label htmlFor={name.id}>{name.label}</label>
      <input 
        type={type} 
        name={name.name} 
        id={name.id}
        placeholder={name.placeholder}
        value={action.value}
        onChange={action.onChange}
        />
    </div>
  )
};
