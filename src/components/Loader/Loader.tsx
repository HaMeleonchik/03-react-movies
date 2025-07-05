import css from "./Loader.module.css";
interface LoaderProps{
    isLoading: boolean
}
export default function Loader({isLoading}:LoaderProps) {
return isLoading && <p className={css.text}>Loading movies, please wait...</p>
}