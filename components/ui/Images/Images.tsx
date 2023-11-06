"use client"

import Image from "next/image"
import {useEffect, useState} from "react"

import {classesToClass} from "@/utils/convert"

import styles from "./Images.module.scss"

const Images = ({
	className = "",
	images,
}: {
	className?: string
	images: string[]
}) => {
	const [current, setCurrent] = useState<number>(0)
	let timer: NodeJS.Timeout | undefined = undefined

	const changeImg = () => {
		setCurrent((prev) => {
			let idx = prev + 1

			if (idx >= images.length) {
				idx = 0
			}
			return idx
		})
	}

	useEffect(() => {
		timer = setInterval(changeImg, 5000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<section className={classesToClass(styles.container, className)}>
			{images.map((img, idx) => {
				return (
					<Image
						src={img}
						alt={"Slide Image"}
						onClick={() => {
							window.open(img, "_blank")
						}}
						aria-hidden={current != idx}
						style={{translate: `${current * -100}%`}}
						width={1280}
						height={720}
						key={idx}
						placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQCAMAAAD4oy1kAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAThQTFRF3Nzc3d3d29vb2tra2dnZ2NjY19fX1tbW1dXV1NTU09PT0tLS0dHR0NDQz8/Pzs7Ovr6+pqamnJyclJSUjY2Nh4eHgICAd3d3enp6gYGBiIiIkJCQlpaWnp6erq6uy8vLzMzMs7OzoaGhmZmZkpKSi4uLhISEfn5+hYWFjIyMk5OTmpqaoqKiurq6xMTEqampnZ2dj4+PiYmJjo6OlZWVxsbGzc3Nqqqqn5+fv7+/oKCgeHh4q6urycnJw8PDwMDAsLCwpaWlysrKfHx8tLS0yMjIeXl5l5eXxcXFvb29ioqKp6enfX19g4ODsrKydnZ2x8fHf39/pKSktbW1e3t7uLi4t7e3wsLCqKiohoaGu7u7goKCubm5r6+vmJiYvLy8kZGRo6Ojtra2ra2trKysm5ubwcHBsbGxJIRjfAAAF1VJREFUeJzt3XebHNWVwOHeXYcN3rUQQj1CwgpGIggbMAoIWQILBAKUwCYZbIxt7O//DVajYGamq7sr3TpVdd73bzhP9a17f0/3dNBi0d2/AUxRD/0rLHqFgNmKzluw6OUHIkUXaNaiby6wWXQjaCt658AMRB9jxil6X8Igog8aGUXvengs+ihAz6KPFFMSvVthUqIPLP2K3k/AE9E1SCj6lgPDiG7NKEXfFGAGokPWVvS6AWwhgAAAAAAAAAAAAAAAAAAAAAAAAMzTv/ct+gEB1NV7AIuKXi1gVqKTNibR9wIYWHR00oi+0cCq6C7Qi+htBNMUfXKZgOhNCqVEny2yiz4BpBa9/aGk6PPFyEVvUJis6MNLd9F7CKgUnYYcou8yMLzo7oxG9I0A5ia6ag1ELxVAEwII0AMBBNISQCAtAQTSEkAgLQEE0hJAIC0BBNISQCAtAQTSEkAgLQEE0hJAIC0BBNJa/Ec50Y8NYKOSASwqeuGA6ZtsAMuKvi3AEARweNH3HHhMAOcmekfBhAggDURvV+iXADIa0YeBfASQJKKPGmMkgNBd9DmmJQGEsYuuxIwJIKQWnaBYAggUEx24bQQQmCYBBGhPAIG0BBBISwCBtAQQSEsAgbQEEEhLAIG0BBBISwCBtAQQSEsAgbQWP/rRj6KvASDEbgDLin6EAGuUD2BR0csHTNnEA1hW9M0ByhLAKNF3HhDAmYreVzAJAkhz0bsWeiKAjEz0kSATASSV6APHuAgg9CX6NNOYAMI0RLdilgQQSFtXAQQKi87cegIITJoAArQggEBaAgikJYBAWgIIpCWAQFoCCKQlgEBaAgikJYBAWosf/zj6EgBiPAhgWdEPEGCd4gEsKnr1gEmbdgDLir43QGECGCT6xgMCOFPR2wqmQQBpKnrPQm8EkHGJPhGkIoBkEn3eGBkBhJ5EH2aaE0CYhOhUzJMAAtEdCiOAQFnRldtAAIEJE0CAVgQQSEsAgbQEEEhLAIG0BBBISwCBtAQQSEsAgbQEEEhr8ZPoKwAIsvhJUdEPD2C9wgEsK3rxgGmbdACLir4zQHECGCP6vgM/FsB5it5VMBECSEPRWxb6I4CMSvSBIBcBJI/o08boCCD0I/os04IAwgREh2KuBBDSi85QHAEEioqO3CYCCEyXAAK0I4BAWgIIpCWAQFoCCKQlgEBaAgikJYBAWgIIpCWAQFqLn5YS/cgAtigXwLKi1w2YgakGsKzouwIMQgAHF33LgScEcGaiNxRMiQBSX/RuhZ4JIGMRfRZISABJIfqgMU4CCJ1FH2PaEkAYuehIzJkAQmbRBQomgEAp0X3bSgCBSRJAgA4EEEhLAIG0BBBISwCBtAQQSEsAgbQEEEhLAIG0Fv/Zt+hHBFBT/wEsKnq5gDmZWADLir4ZwLAEcDDRtxo4SADnIXofwSQJINtF71IoRAAJFn0EyEwAmbXoA8a4CSC0FX166UwAYZyi25CCAEJG0eUZCQEEehadtfoEEJgUAQTogQACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkNbiv3oS/UAAmuotgGVFLxMwRxMJYFHR9wAIIoClRd9hYC0BnLTo7QPTJoCsFb05oTQBJEj01gcBZJ6izxUTIYDQVPSppTcCCKMSnYRcBBASiQ7O2Agg0I/omrUggMAUCCBAnwQQSEsAgbQEEEhLAIG0BBBISwCBtAQQSEsAgbQW/91R9AMAaKtzAIuKXh1g1sYdwLKi1x4IljmARUXfWGA7AZyk6G0D8yCAHBS9J2EwAsiwonc87CGAzEn0eWJiBBBqij6s9E8AYRSiU5CTAML8RXdmtAQQ6Ca6Yh0IIDBiAghQhAACaQkgkJYAAmkJIJCWAAJpCSCQlgACaS3+p7noawboRZsAlhW9IkAa4wtgUdHLDYxJsgCWFX0zgWYEcDKitwrMjwCyK3ofQggBpLzoXQ5rCCATF32EmDIBhA2iDyhlCSBEiT79CCDMVHRbJkEAgeaiy9UTAQRGRgABihBAgAcEEEhLAIG0BBBISwCBtAQQSEsAgbQWP6sn+joBelc3gGVFrwKQ0jgCWFT0EgNjlSCAZUXfQKA9ARyz6N0BMyeAeUXvPQgngBQRvbGhDgFkgqKPDXMhgHBA9KFkOAIIQ4o+8ewjgDAf0T2ZHAEEaomOVQkCCIyAAAKUIIAABwkgkJYAAmkJIJCWAAJpCSCQ1uJ/q0VfF0Bx6wJYVvSjBvhZVACLil5SYCpmGMCyom8Y0B8BHJPo3QDJCGAe0XsNRkcA6UX0RoY2BJAJiD4mzJUAkl70ISSOAEJJ0SecjQQQpiu6H5MngECl6DgNQQCBANHpe0QAgbkRQIBtBBBISwCBtAQQSEsAgbQEEEhLAIG0Fv/3g+hrARjU3gAWFf1AAQ4aLIBlRS8jMEUzCWBR0fcIKEQAo0XvAEhMAOcten/BqAkgrUVvXuhKABmp6KNBBgJIRtHnjpEQQOhb9KmmNgGESYlOxrwIIPAv0UEamgACA4nO3SoBBOZAAAGaEEAgLQEE0hJAIC0BBNISQCAtAQTSEkAgrcXPC4p+cACbFA1gWdFLB0zdhANYVPR9AQYggBGi7zrwkADOToltcuipw08feebocufYs8dPPPeLk50Hnjp95pfPnz33wvKFF196+fwrv+p+ib9+9bUTr//m2M7y6DNvXDj86sXuE0lAANni5OnzR5f77Tx9+lKHTXfx8vGdAxOPvXmlw8Cf/+qtFw8MvHrkt9c6TCQJAWSj6xcOtupxA0+83XLiO89WDly++LuWTyxvPPdu9cTj7/V7WJgfAWSDm8+9X92W3edYH9xqMfHDj9YOXL5w+VLzgac+XpO/XS8d2vNfRp81RkgAWevUU7fXt+WBnTevNZx4/eWNA5d37ja9xnfubBx478T1phNbij7JtCKArHP/4N/VVh290mji6eqX03tdONVk4Mnntw7cea/RJY5TdCbmSwBZ48onW+PSMC+f3qsx8aOb9QfeX/PnxH3uPdX4oScTHaFIAki1329/trbr6sd1B17a8vL3iWO13115u06iH/igxZ8W6Ul04bYQQCo9dbVeXJbLX9bLy82zdQf+4bN6l/j5H+pOPNv0b5VMhABSxGt12/LAkTp5uXWswcTf1rnEXzQYeO6LjuvBTAkgFb5sEJfl8o3tzwFPfdVoYo03g//YaODXDf6ySCICyKpvar/+feSDrROPNxt49Y/bBl7f/AmdFR81eneZLASQFV9s+GhxtW1vtL7SdODtLR/fu7b5438VXu5teZgRAeSgm183jcvy3uZPw9xtPHB5Z+Nr1ksvNZ/4Vq+LxDwIIAedaB6X5fsfbhh4v94navb7aNMfFpv9jfKxP/W9UEyfAHLAh23isjy2oVfnW038dP3Aaw3/APjITpvvLjNvi0s9in4w9OE3rXK1fHXtwC/aDdxZ/yL4uXYT/1xgtZi2XgNYVvRSJXG6XVyW755cN/H1lhMPrxv464ZvUj9x9dC6iWQ1oQAWFX0fRuNSkw8s73NmzcRv2g68uu6d4O2/gLDG8VKrxlQJ4BCi73IDH7eNy3LnYvXE7b8ps87T1QO/bT1w+U25hWOSBHDy+t0QNX9foEr1uxaftR94r/qvgE+3n+jDgOwngOz1dvu4LH9TucPe7DCx+jvBjT+m/YMd3wdhHwFkr/avgB+4VTWx/SvgNX+za/03xV2nhz5gjJsAslfbd2wferVi4K0uA9+/UTHxrS4TfRKGfQSQPU6u/zeQani9YuLlLgOXdysmPtNl4O3elir65NILAWSP9zrlquoJ2186TTyxOvB+p4HLb8ovYg+is5CHALLHp73XpfXHCh/6anXg77td4pflF3H0oqMzJgLIHk1+CLpCxSvW2j9bX+mT1YF/6naJZ8ovYm7RRWtIANmjzQ/B7PHblYGnug28t3qJrX4I5gfnB1hFihFASmr4w80Hfbcy8Hq3gcuLKxPPdBv4/BDLyGQIIHvU+Xd2Nzi8MrDdb2v94O2Vie1+W+tfPhpiGZkMAWSPbm9ZLC+sDPxrt4HLz1Ymtv4lhEfuDLGMTIYAskfjf2ljv6dXBn7ebeDy85WJHb4JvOvcAKvIdAgge3zUrS6vrQw81G1gxUvgw90GvjTEMjIZAsgeL3ery+9WBl7sNnB5c2Vix48qrj5JJTMBZI+O7zD8bXVip+/WLa+uDvx7t0tcfZ+GzASQPRr/+737/XV14tFOA79eHdjt23rLT8svIhOyONVR9AOgT5e71eXQ6sROP12wPLs68I/dLrHiSSqJdQ5gUdGrk063uuxU3LA/d5r4/erAGy3/RaTHKhpNYovoxgWKXvsx6vTV3apvWbzTKVfvVUw80mVgxZeLyWwRXaG5ir6xLV3oUpfLFQNv3usw8P2TFROf6nKJvyy9gEzLIjoUtFFsP/ytS10qfxK/5b+z/tDxqoGdPlpY9QurJLaIPsqMSpdfsK/48b5L3d5YrvqN/UuXbrcfWPkb+yS2iD5xjEuHd23frBz4q/YDq59Sdnlf5Y2Bjxdjtxj2eDF2HX5u7x/VE9sn9fXqgR3eqvYKmP0WxU4Sk3Sy9SeXz6+ZeLp1rg6tmdj6Vwuf6bY20YeV/i26bQlmp+1XzXYurpvY9kcGT6wbeKXlwOVnZZasH9EpyGkRfdsZmZPn2sXlzNqJLX8S6+r1tRNb/iTW8RLrNQ3RnRmtRfSdYWza/atD715bP/GNVhMPrx/4j1YDr17pf7HYFV2xDhbRa8fotHrX4uMNA1u9a7H+JfUDrd4IXvuSmlETQAZ1qMVPWB05uWnic80H3ntn08CLLX67/+tNRSWpRfQFMD53G3997dyGF8C7mr8I/m7zwCuNv7R8++3+FojZWERfACPU9NsbL6x/v+KRmy82nHhh2yX+vuGPwlz9pqe1YVYW0RfAGDX7afz3P9w68Hqz76+d3fiK+qHfNRq4/EUfy8LsLKIvgDG60egnDO7WmPh5kz8s3qnz57oPmlziK11XhHlaRF8Ao3TtL7XbcvvzWhO//aT2xLM3a008U/9PlX/vshbM2CL6AhipV2rm5c6arwCvuFX34zXnt7/+feTuTr2B79ZLNAktTjYUfcEMpV5e3qj3bG3XtXp/WWzwbK3es8o73v9lncYBLCp6NdirTl5qP1t76LvtzyprvqB+rM6zypovqElpXAEsK3qtJ+f+m1ueBD7b9LXlt1v+QY+r399qNvDGq1sqffTv7jvrZQpgUdE3soxb32948/bcP1tM/GzDb8Pcu1D374l7XPt0wydsXnjqRotrJA8BnIS4DfLFiTWfOD56ueVV3V33oejXt3+csNL9t9Y8Ud0549UvmwkgW0J2628XVp5jvfjc5+2jfPLb784erOrO8S9bPPt74ubd818fvMSvz9/d8v08EEDq+Oa78y8f+erocufYM69feO3y9Qb/a/W+u//Ptz74y9k77y5vn3vp+T+fea/7Tr7y5eELbzx7dGf5yVdHnv7+43W/Jg17CSBTFn1+mDgBhDWiDyflCSCEiD767BJAmJ/orkyGAALNRFerRwIIjIkAApQggACPCSCQlgACaQkgkJYAAmkJIJCWAAJpLW5sF32NAEXUCWBZ0SsApBUfwLKi1xcYsbkHsKjomwd0I4CjFb01YP4EMKfofQejIID0L3pXQ00CyMREHxnmRABhj+gDybAEEAYTfdw5SABhHqJbMkkCCGwXXapCBBAIJoAARQggQAUBBNISQCAtAQTSEkAgLQEE0hJAIK3FtWrR1wVQ3LoAlhX9qAFuRAWwqOglBaZihgEsK/qGAf0RwDGJ3g2QjADmEb3XYHQEkH5E72RoQQCZgOhjwlwJIOlFH0LiCCCUFH3C2UgAYbqi+zF5AghUio7TEAQQCBCdvkcEEJgdAQTYQgCBtAQQSEsAgbQEEEhLAIG0BBBISwCBtBY394m+HIDhHAhgWdEPFmCvQQNYVvRSAlMzowAWFX2fgAIEcAyidwEkJYCzF73FYLwEkE6iNzB0IYCMV/TpYPYEkKyizx4jIIBQQvTJphYBhMmJzsZ8CCCwT3SUhiSAwHCii3eAAAJzIYAAdQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkNbi/kPRlwEwvMcBLCr6MQJUGiKAZUWvIDBZ0w9gWdH3ByhIAANF33zITgBnK3prwfgJIG1E71vohQAyPtGngjQEkGSijxxjIoDQo+gDTTMCCJMRnYv5EUBgV3SLQgggUF506dYQQGDiBBCgMQEE0hJAIC0BBNISQCAtAQTSEkAgLQEE0hJAIK3FxXKiHxvARiUDWFT0wgHTN9kAlhV9W4AhCGCA6JsOPCKAcxO9o2BCBJAmovcr9EoAGY3ow0A+AkgS0UeNMRJA6C76HNOSAMLYRVdixgQQcotuUCgBBIqJDtw2AghMlAACtCaAQFoCCKQlgEBaAgikJYBAWgIIpCWAQFoCCKQlgEBai1tFRD8sgO0KBbCs6EUD5mGSASwq+o4AgxHAYUXfb2APAZyR6M0EUyOA1BS9VaF/AsgYRJ8DkhJA5i/6lDFaAgjdRJ9hOhBAGLHoQMydAEJa0fmJJ4BACdFtq0UAgekRQIBuBBBISwCBtAQQSEsAgbQEEEhLAIG0BBBISwCBtAQQSEsAgbQWvy4h+lEB1FAmgEVFLxkwFxMMYFnRNwQYjgAOKfpuA/sI4HxE7yWYHAGknuidCgUIICMQfQzISgCZvehDxngJIHQRfYLpRABhvKL7MHsCCElFx2cMBBAoIDpt9QggMDkCCNCRAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkNbiegHRDwqgjiIBLCp6xYDZmF4Ay4q+H8CABHBA0Tcb2E8AZyN6K8H0CCB1RO9TKEIAiRd9CkhLAJm76DPGiAkgdBB9gOlGAGG0ovMwfwIIOUW3ZxQEEOhfdNlqEkBgYgQQoDMBBNISQCAtAQTSEkAgLQEE0hJAIC0BBNISQCAtAQTSEkAgLQEE0hJAIK3FF8VEPzSAzQoGsKjodQNmYKoBLCv6rgCDEMDBRd9y4AkBnJnoDQVTIoA0EL1doV8CyFhEnwUSEkByiD5pjJIAQmfRx5i2BBBGLjoScyaAkFl0gYIJIFBKdN+2EkBgmgQQoD0BBNISQCAtAQTSEkAgLQEE0hJAIC0BBNISQCAtAQTSEkAgLQEE0hJAIK3FPx6KvgyA4T0OYFnRDxKgyiABLCp6BYHJmn4Ay4q+P0BBAhgo+uZDdgI4W9FbC8ZPAGkjet9CLwSQ8Yk+FaQhgGQTfeYYEQGEHkUfaJoRQJiM6FzMjwACu6JbFEIAgfKiS7eGAAITJ4AAjQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkNbi7QrRFwUwhMoAFhX9iAEeGz6AZUWvJzAhcwtgUdE3C+iXAI5G9FaAfAQwh+h9BqMkgHQXvYuhJQFk7KLPCDMmgKQWfQCJJYBQTPTxZhsBhGmKbscsCCCwKrpMAxFAYGDR2fuBAAKzIoAANQggkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpLa40EH2xAH1qFMCyopcCyGZEASwqep2BEcoSwLKi7yLQigCOXvQWgfkSwOSiNyBEEkAKit7esJkAMlXRZ4cZEECoEn0yGYQAwuCijz1PCCDMTHRUpkQAgfqii9UzAQTGQgABihBAgB8IIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJIJDW4lDPoh8QQF29B7Co6NUCZmVaASwr+l4AAxPAoUTfaWCFAM5C9DaCaRJAtorepFCKABIr+gSQmgAyZ9Hni5ETQGgp+vDSnQDCKEWnIQcBhISiwzMW/w+qrNJG9N7XTAAAAABJRU5ErkJggg=="
					/>
				)
			})}

			{images.length > 1 && (
				<section className={styles.dots}>
					{[...Array(images.length)].map((_, idx) => {
						return (
							<button
								key={idx}
								className={classesToClass(
									styles.dot,
									current === idx ? styles.selected : ""
								)}
								onClick={() => setCurrent(idx)}
								aria-label={`Show ${idx + 1} image`}
							></button>
						)
					})}
				</section>
			)}
		</section>
	)
}

export default Images
