
const CommentData = [
  {
    name: "shree",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "shree",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "shree",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "shree",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [
              {
                name: "shree",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU"
        alt="user"
        className="w-10 h-8"
      />
      <div>
        <p>{name} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) => {
    return (
      <div>
        {comments.map((cmt, index) => {
            return (
                <div>
                <Comment key= {index}  data={cmt} />
                <div className="pl-5 border border-l-black ml-5">
                    <CommentList comments={cmt.replies} />
                    </div>
                </div>
            )
        })}
      </div>
    )
}

const CommentsContainer = () => {
  return (
    <div className="flex row-span-2">
      <div>
        <h2>Comments : </h2>
      </div>
      <div>
      <CommentList comments={CommentData} />
      </div>
    </div>
  );
};
export default CommentsContainer;
