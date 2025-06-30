import { useRef, useEffect, use } from "react"

function ProjectTimeline() {
    const canvasRef = useRef('')

    function drawCircle(context, x) {
        context.fillStyle = '#96DEFF'
        context.beginPath()
        context.arc(x, 125, 8, 0, 2 * Math.PI, true)
        context.fill()
    }

    function drawHorizontalLine(context, x1, x2) {
        context.beginPath()
        context.strokeStyle = '#96DEFF'
        context.moveTo(x1, 125)
        context.lineTo(x2, 125)
        context.lineWidth = "5px"
        context.stroke()
    }

    function drawVerticalLine(context, x) {
        context.beginPath()
        context.moveTo(x, (125 - 6))
        context.lineTo(x, (125 + 6))
        context.lineWidth = "5px"
        context.stroke()
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        // drawCircle(context, 50)
        // drawHorizontalLine(context, 50, 100)
        // drawVerticalLine(context, 100)
        // drawHorizontalLine(context, 100, 150)
        // drawVerticalLine(context, 150)
        // drawHorizontalLine(context, 150, 200)
        // drawVerticalLine(context, 200)
        // drawHorizontalLine(context, 200, 250)

        // drawCircle(context, 250)
        let scale = 100
        for (let x = 50; x <= 50 + scale * 8; x += scale * 4) {
            drawCircle(context, x)
            drawHorizontalLine(context, x, x + scale)
            drawVerticalLine(context, x + scale)
            drawHorizontalLine(context, x + scale, x + scale * 2)

            drawVerticalLine(context, x + scale * 2)
            drawHorizontalLine(context, x + scale * 2, x + scale * 3)
            drawVerticalLine(context, x + scale * 3)
            drawHorizontalLine(context, x + scale * 3, x + scale * 4)
        }


        drawCircle(context, 1250)

    }, [])

    return <div style={{ overflowX: 'scroll' }}>
        <div className="grid">
            <div className="col-1">
                <div className="card">
                    <h1 className="card-title">
                        Hello
                    </h1>
                </div>
            </div>
        </div>
        <canvas ref={canvasRef} height={"250px"} width={"1300px"} />
    </div>
}

export default ProjectTimeline