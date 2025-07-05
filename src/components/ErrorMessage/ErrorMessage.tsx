import css from "./ErrorMessage.module.css"
interface ErrorMessageProps{
    isErrorMessage: boolean
}
export default function ErrorMessage({isErrorMessage}:ErrorMessageProps) {
    return isErrorMessage && <p className={css.text}>There was an error, please try again...</p>
}