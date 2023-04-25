import { ArticleView } from 'entities/Article/model/types/article';
import classNames from 'shared/lib/classNames/classNames';
import SmallIcon from 'shared/assets/icons/smallview.svg';
import BigIcon from 'shared/assets/icons/bigview.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewProps {
className?: string;
view: ArticleView;
onClickView: (viewType: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigIcon,
    },
];

const ArticleViewSelector = ({ className, view, onClickView }: ArticleViewProps) => {
    const onClick = (viewType: ArticleView) => () => {
        onClickView(viewType);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, { }, [className])}>
            {viewTypes.map((item) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(item.view)}
                    key={item.view}
                >
                    <Icon
                        Svg={item.icon}
                        className={classNames('', { [cls.notSelected]: item.view !== view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
};

export default ArticleViewSelector;
