import React from 'react'
import { Layout, Typography, Menu, Dropdown, Button, Card, Image, Row, Col } from 'antd';
import { DownOutlined, SearchOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "../Dashboard/Dashboard.css"
import graph1 from "../../assets/graph1.jpg"
import graph2 from "../../assets/graph_img.png"
import sudoku from "../../assets/sudoku.jpg"
import code from "../../assets/logo_code.png"

const Language = [
	{
		"text": "HTML & CSS",
	},
	{
		"text": "Python",
	},
	{
		"text": "Javascript",
	},
	{
		"text": "Java",
	},
	{
		"text": "SQL",
	},
	{
		"text": "Bash/Shell",
	},
	{
		"text": "Ruby",
	},
	{
		"text": "C++",
	},
	{
		"text": "R",
	},
	{
		"text": "C#",
	},
	{
		"text": "PHP",
	},
	{
		"text": "Go",
	},
	{
		"text": "SWift",
	},
	{
		"text": "Kotlin",
	},
]

const Subjects = [
	{
		"text": "Web Development"
	},
	{
		"text": "Data Science"
	},
	{
		"text": "Computer Science"
	},
	{
		"text": "Developer Tools"
	},

	{
		"text": "Machine Learning"
	},
	{
		"text": "Web design"
	},
	{
		"text": "Game Development"
	},
	{
		"text": "Mobile Development"
	},
	{
		"text": "Cyber Security"
	},
	{
		"text": "For Business"
	},
	{
		"text": "Beta Catalog"
	},
]

const data = [
	{
		multitext: ["Explore All", "Python"],
		image: graph1
	},
	{
		multitext: ["Career Path", "Frontend Engineer", "Begineers Friendly,121 Lesson"],
	},
	{
		multitext: ["Course", "Learn javascript", "Begineers Friendly,17 Lesson"],
	},
	{
		multitext: ["Course", "Learn HTML", ". Begineers Friendly,6 Lesson"],
	},
	{
		multitext: ["Explore All", "Web Development "],
	},
	{
		multitext: ["Course", "Learn python 3", "Begineers Friendly,16 Lesson"],
	},
	{
		multitext: ["Explore All", "Data Science"],
	},
	{
		multitext: ["Explore All", "Java script"],
	},
	{
		multitext: ["Career path", "Full Stack Engineer", "Begineers Friendly,145 Lesson"],
	},
	// { 
	// 	multitext : ["Course","Welcome To Codecademy","Begineers Friendly,1 Lesson"],
	// },
]

const Company = [
	{
		"text": "About"
	},
	{
		"text": "Careers"
	},
	{
		"text": "Affiliates"
	},
]
const Resources = [
	{
		"text": "Blog"
	},
	{
		"text": "Cheatsheets"
	},
	{
		"text": "Articles"
	},
]
const Community = [
	{
		"text": "Forums"
	},
	{
		"text": "Chapters"
	},
	{
		"text": "Events"
	},
]

const Mobile = [
	{
		"text": "App Store"
	},
	{
		"text": "Google Play"
	},
]

const Individual_Plans = [
	{
		"text": "Pro Membership"
	},
	{
		"text": "For Students"
	},
]

const Enterprise_plans = [
	{
		"text": "For Business"
	}
]

const css = [
	{
		"text": "Course",
		"text1": "Learn Intermediate CSS",
		"text2": "Intermediate,10 Lesson"
	},
	{
		"text": "Course",
		"text1": "Master Statistics with Python",
		"text2": "Intermediate,31 Lesson"
	},
	{
		"text": "Course",
		"text1": "INtroduction to Cybersecurity",
		"text2": "Begineer friendly,2 Lesson"
	},
	{
		"text": "Course",
		"text1": "Study for the AP Computer Science A Exam (Java) ",
		"text2": "Beginners friendly,23 Lesson"
	},
	{
		"text": "Course",
		"text1": "Pass the Technical Interview  with python",
		"text2": "Intermediate,43 Lesson"
	},
	{
		"text": "Course",
		"text1": "Design Database with Postegre SQL",
		"text2": "Beginners friendly,11 Lesson"
	},
]
function Dashboard() {
	const { Header, Footer, Sider, Content } = Layout;
	const { Title } = Typography;
	const { SubMenu } = Menu;
	const resource = (
		<Menu>
			<Menu.Item key="0">
				<a href="https://www.antgroup.com">ChetSheets</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="https://www.aliyun.com">Projects</a>
			</Menu.Item>
			<Menu.Item key="3">Article</Menu.Item>
			<Menu.Item key="3">Blog</Menu.Item>
		</Menu>
	);
	const community = (
		<Menu>
			<Menu.Item key="0">
				<a href="https://www.antgroup.com">Forms</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="https://www.aliyun.com">Chats</a>
			</Menu.Item>
			<Menu.Item key="3">Chapters</Menu.Item>
			<Menu.Item key="3">Events</Menu.Item>
		</Menu>
	);
	const pricing = (
		<Menu>
			<Menu.Item key="0">
				<a href="https://www.antgroup.com">For Individual</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="https://www.aliyun.com">For Students</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<div >
			<Layout>
				<Header className="header">
					<div className="header_style">
						<img src={code} style={{height:50,width:80,backgroundColor:'white',marginTop:10}} />
						<Title className="title" level={5}>Catalog</Title>
						<div className="dropdown_style">
							<Dropdown style={{ marginLeft: 10 }} overlay={resource} trigger={['click']}>
								<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
									Resources <DownOutlined />
								</a>
							</Dropdown>
							<Dropdown overlay={community} trigger={['click']}>
								<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
									Community <DownOutlined />
								</a>
							</Dropdown>
							<Dropdown overlay={pricing} trigger={['click']}>
								<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
									Pro Pricing <DownOutlined />
								</a>
							</Dropdown>
						</div>
						<Title className="title" level={5}>For Business</Title>
					</div>
					<div className="header_style_portion">
						<SearchOutlined style={{ fontSize: '150%' }} />
						<Button type="link">Login</Button>
						<Button type="primary">Signu Up</Button>
					</div>
				</Header>
				<div className="outset" />
				<Content className="content">
					<div style={{ display: 'flex' }}>
						<div className="left_portion">
							<Menu
								// onClick={this.handleClick}
								className="menu_sidebar"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								mode="inline">
								<SubMenu   key="sub1" title="Language">
									{
										Language.map((item) => {
											return (
												<Menu.Item>{item.text}</Menu.Item>
											)
										})
									}
								</SubMenu>
							</Menu>
							<Menu
								// onClick={this.handleClick}
								className="menu_sidebar"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								mode="inline">
								<SubMenu  key="sub1" title="subjects">
									{
										Subjects.map((item) => {
											return (
												<Menu.Item>{item.text}</Menu.Item>
											)
										})
									}
								</SubMenu>
								<Menu.ItemGroup key="g2">
									<Menu.Item key="3">Full Catalog</Menu.Item>
									<Menu.Item key="4">Where do I Login</Menu.Item>
								</Menu.ItemGroup>
							</Menu>
						</div>
						<div className="right_portion">
							<div className="border">
								<Title style={{ textAlign: 'center', lineHeight: 2.5 }} level={4}>Not sure where to Login??<a>Take our quiz-</a></Title>
							</div>
							<Title style={{ marginTop: 20, marginLeft: 20 }} level={4}>Most Popular</Title>
							{/* <div className="card">
								{
									data.map((item) => {
										return (<Card  style={{backgroundImage: `url(${item.image})`}} className="card_style"> {item.multitext.map((text) => {
											return (
												<Title style={{ marginTop:20}} level={4}>{text}</Title>
											)
										})
										}</Card>)
									})
								}
							</div> */}
							<div className="main_cart">
								<Row>
									<Col span={8}>
										<Row>
											<a className="box_hover">
												<Card className="image_card">
													<div className="card_text">
														<h2>Explore All</h2>
														<h2 className="cart_text_font">Python</h2>
													</div>
												</Card>
											</a>
										</Row>
										<a className="box_hover">
											<Card style={{ marginTop: 20 }} className="plain_card">
												<h4 className="upper_text">Course</h4>
												<h1 className="cart_text_font">Learn HTML</h1>
												<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,6 Lessons </h4>
												<h5 className="language_text">Lanuage Fluency</h5>
											</Card>
										</a>
									</Col>
									<Col span={8}>
										<a className="box_hover">
											<Card className="big_card">
												<div style={{ display: 'flex' }}>
													<h4 className="pro_style">PRO</h4>
													<h4 style={{ marginLeft: 10 }} className="upper_text">Career Path</h4>
												</div>
												<h1 className="cart_text_font">Front-End Engineer</h1>
												<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,121 Lessons </h4>
												<Image className="big_card_img_style" src={graph2} />
												<h5 className="job_text" >Job Essential</h5>
											</Card>
										</a>
									</Col>
									<Col className="" span={8}>
										<Row>
											<a className="box_hover">
												<Card className="plain_card">
													<h4 className="upper_text">Course</h4>
													<h1 className="cart_text_font">Learn Javascript</h1>
													<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,17 Lessons </h4>
													<h5 className="language_text">Lanuage Fluency</h5>
												</Card>
											</a>
										</Row>
										<a className="box_hover">
											<Card style={{ marginTop: 20 }} className="image_card">
												<div className="card_text">
													<h2>Explore All</h2>
													<h2 className="cart_text_font">Web Development</h2>
												</div>
											</Card>
										</a>
									</Col>
								</Row>
								<Row>
									<Col span={8}>
										<Row>
											<a className="box_hover">
												<Card style={{ marginTop: 20 }} className="plain_card">
													<h4 className="upper_text">Course</h4>
													<h1 className="cart_text_font">Learn Python 3</h1>
													<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,16 Lessons </h4>
													<h5 className="language_text">Lanuage Fluency</h5>
												</Card>
											</a>
										</Row>
										<Row>
											<a className="box_hover">
												<Card style={{ marginTop: 20 }} className="image_card">
													<div className="card_text">
														<h2>Explore All</h2>
														<h2 className="cart_text_font">Javascript</h2>
													</div>
												</Card>
											</a>
										</Row>
										<a className="box_hover">
											<Card style={{ marginTop: 20 }} className="plain_card">
												<h4 className="upper_text">Course</h4>
												<h1 className="cart_text_font">Learn Java</h1>
												<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,16 Lessons </h4>
												<h5 className="language_text">Lanuage Fluency</h5>
											</Card>
										</a>
									</Col>
									<Col span={8}>
										<Row>
											<a className="box_hover">
												<Card style={{ marginTop: 20 }} className="image_card">
													<div className="card_text">
														<h2>Explore All</h2>
														<h2 className="cart_text_font">Data Science</h2>
													</div>
												</Card>
											</a>
										</Row>
										<a className="box_hover">
											<Card style={{ marginTop: 20 }} className="big_card">
												<div style={{ display: 'flex' }}>
													<button className="upper_text">PRO</button>
													<h4 style={{ marginLeft: 10 }} className="upper_text">Career Path</h4>
												</div>
												<h1 className="cart_text_font">Full-Stack-Engineer</h1>
												<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,145 Lessons </h4>
												<Image className="big_card_img_style" src={graph2} />
												<h5 className="job_text" >Job Eseential</h5>
											</Card>
										</a>
									</Col>
									<Col span={8}>
										<Row>
											<a className="box_hover">
												<Card style={{ marginTop: 20 }} className="big_card">
													<div style={{ display: 'flex' }}>
														<button className="upper_text">PRO</button>
														<h4 style={{ marginLeft: 10 }} className="upper_text">Career Path</h4>
													</div>
													<h1 className="cart_text_font">Data-Scientist</h1>
													<h4><span class="dot"></span>	<span class="dot1"></span> Beginners friendly,85 Lessons </h4>
													<Image className="big_card_img_style" src={graph2} />
													<h5 className="job_text" >Job Essential</h5>
												</Card>
											</a>
										</Row>
										<a className="box_hover">
											<Card style={{ marginTop: 20 }} className="image_card">
												<div className="card_text">
													<h2>Explore All</h2>
													<h2 className="cart_text_font">Python</h2>
												</div>
											</Card>
										</a>
									</Col>
								</Row>
							</div>
							<div className="noteWorthy">
								<Title level={3}>New + NoteWorthy</Title>
								<div className="notwworth_border">
									<div style={{ width: '50%' }}>
										<h4 className="text_color" >Pro students</h4>
										<Title className="text_color_level" level={1}>Student can join Pro for 35% less</Title>
									</div>
									<div style={{ width: '50%' }}>
										<h3 className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </h3>
									</div>
								</div>
							</div>
							<div className="card">
								{
									css.map((item) => {
										return (
											<a className="box_hover">
												<Card className="boder_card">
													<div>
														<Title level={5}>{item.text}</Title>
														<Title style={{ fontWeight: 'bold' }} level={4}>{item.text1}</Title>
														<h4><span class="dot"></span>	<span class="dot1"></span>{item.text2}</h4>
													</div>
												</Card>
											</a>
										)
									})
								}
							</div>
						</div>
					</div>
				</Content>
				<div className="outset" />
				<Footer className="footer">
					<div className="left_footer">
						<div>
							<Title level={4}>COMPANY</Title>
							{
								Company.map((item) => {
									return (
										<Title level={5}>{item.text}</Title>
									)
								})
							}
						</div>
						<div>
							<Title level={4}>Resources</Title>
							{
								Resources.map((item) => {
									return (
										<Title level={5}>{item.text}</Title>
									)
								})
							}
						</div>
						<div>
							<Title level={4}>Community</Title>
							{
								Community.map((item) => {
									return (
										<Title level={5}>{item.text}</Title>
									)
								})
							}
						</div>
						<div className="left_sub_footer">
							<div>
								<Title level={4}>MOBILE</Title>
								{
									Mobile.map((item) => {
										return (
											<Title level={5}>{item.text}</Title>
										)
									})
								}
							</div>
							<div>
								<Title level={4}>INIDIVIDUAL PLANS</Title>
								{
									Individual_Plans.map((item) => {
										return (
											<Title level={5}>{item.text}</Title>
										)
									})
								}
							</div>
							<div>
								<Title level={4}>ENTERPRISE PLANS</Title>
								{
									Enterprise_plans.map((item) => {
										return (
											<Title level={5}>{item.text}</Title>
										)
									})
								}
							</div>
						</div>
					</div>
					<div className="vertical_border" />
					<div className="right_footer">
						<div>
						<Title level={3}>Course Catalog</Title>
							<Title level={4}>Subjects</Title>
							{
								Subjects.map((item) => {
									return (
										<Title level={5}>{item.text}</Title>
									)
								})
							}
						</div>
						<div>
							<Title level={4}>Language</Title>
							{
								Language.map((item) => {
									return (
										<Title level={5}>{item.text}</Title>
									)
								})
							}
						</div>
					</div>
					{/* <div className="horizontal_line" /> */}
				</Footer>
			</Layout>
		</div >
	);
}
export default Dashboard;