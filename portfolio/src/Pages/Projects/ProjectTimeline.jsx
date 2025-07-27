import { useRef, useEffect } from "react"
import ProjectCard from "./Components/ProjectCard"

function ProjectTimeline() {
    const canvasRef = useRef('')

    function drawCircle(context, x) {
        context.fillStyle = '#96DEFF'
        context.beginPath()
        context.arc(x, 50, 8, 0, 2 * Math.PI, true)
        context.fill()
    }

    function drawHorizontalLine(context, x1, x2) {
        context.beginPath()
        context.strokeStyle = '#96DEFF'
        context.moveTo(x1, 50)
        context.lineTo(x2, 50)
        context.lineWidth = "5px"
        context.stroke()
    }

    function drawVerticalLine(context, x) {
        context.beginPath()
        context.moveTo(x, (50 - 6))
        context.lineTo(x, (50 + 6))
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
        let years = ['June 2025', 'June 2024', 'June 2023', 'June 2022']
        let scale = 200
        var y = 0
        for (let x = 50; x <= 50 + scale * 8; x += scale * 4) {
            drawCircle(context, x)
            context.font = '16px Helvetica'
            context.fillStyle = '#96DEFF'
            context.fillText(years[y], x - 40, 50 + 35)
            y++
            drawHorizontalLine(context, x, x + scale)
            drawVerticalLine(context, x + scale)
            drawHorizontalLine(context, x + scale, x + scale * 2)

            drawVerticalLine(context, x + scale * 2)
            drawHorizontalLine(context, x + scale * 2, x + scale * 3)
            drawVerticalLine(context, x + scale * 3)
            drawHorizontalLine(context, x + scale * 3, x + scale * 4)
        }


        drawCircle(context, 2450)
        context.font = '16px sans-serif'
        context.fillStyle = '#96DEFF'
        context.fillText(years[y], 2450 - 40, 50 + 35)

    }, [])

    return <div style={{ overflowX: 'scroll', scrollbarColor: '#f1f1f1 #6F66FD ' }}>
        <div className="d-flex flex-row" style={{ width: '2700px', gap: '20px' }}>
            <ProjectCard
                title="CampusFind"
                image="campusfind.png"
                tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
            />
            <canvas width={"50px"}></canvas>
            <ProjectCard
                title="CampusFind"
                image="campusfind.png"
                tools={['Flutter', 'Flask', 'Firebase', 'Arduino']}
                description={"Quickly locate coworkers and teammates within large campuses with this mobile app"}
            />
        </div>
        <canvas ref={canvasRef} height={"100px"} width={"2700px"} />
    </div>
}

export default ProjectTimeline

/*

Projects to add :

FeedFirst,
Contact-Ms,
Smart-Food-Bin,
CampusFind-Admin
CampusFind,
HDP,
WisdomBot

*/