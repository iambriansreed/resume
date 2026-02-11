import React from 'react';
import data from '../data';
import { usePage } from './page';

type ExperienceProps = {
    volunteer?: boolean;
    continued?: boolean;
};

export default function Experience({ volunteer, continued }: ExperienceProps) {
    const items = [...data.experience].sort((a, b) => (a.startedOn > b.startedOn ? -1 : 1));

    const formatDate = (dateTime: number) => {
        const date = new Date(dateTime);

        return date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        });
    };

    const page = usePage();

    console.log({ page });

    return (
        <section className="experience">
            <h2>
                {volunteer && 'Volunteer '}Experience
                {continued && (
                    <>
                        {' '}
                        <span className="continued">(continued)</span>
                    </>
                )}
            </h2>
            {items
                .filter((item) => {
                    if (volunteer) return item.volunteer;

                    return item.page === page;
                })
                .map((item, index) => (
                    <aside key={index}>
                        <h3 className="title">{item.title}</h3>
                        <div className="company-time">
                            <h4 className="company">{item.companyName}</h4>
                            <div className="time">
                                {formatDate(item.startedOn)} -{' '}
                                {item.finishedOn ? formatDate(item.finishedOn) : 'Present'}
                            </div>
                        </div>
                        <ul>
                            {item.description.map((desc, index) => (
                                <li key={index}>⇢ &nbsp;{desc}</li>
                            ))}
                        </ul>
                    </aside>
                ))}
        </section>
    );
}
